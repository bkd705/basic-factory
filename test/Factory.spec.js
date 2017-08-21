import { expect } from 'chai'
import Factory from '../src/Factory'

describe('Factory', () => {
  let TestFactory

  beforeEach(() => {
    TestFactory = new Factory()
  })

  describe('register', () => {
    it('should add a new type to registeredTypes', () => {
      TestFactory.register('test', () => ({}))
      expect(TestFactory.registeredTypes).to.have.property('test')
    })

    it('should throw error if type already exists', () => {
      TestFactory.register('test', () => ({}))
      expect(() => TestFactory.register('test', () => {})).to.throw()
    })

    it('should throw an error if return type of generator is not an object', () => {
      expect(() => TestFactory.register('test', f => f)).to.throw()
    })
  })

  describe('create', () => {
    it('should throw an error if type does not exist', () => {
      expect(() => TestFactory.create('poutine')).to.throw()
    })

    it('should return a object from type generator', () => {
      TestFactory.register('test', () => ({
        name: 'brennen'
      }))
      const output = TestFactory.create('test')
      expect(output).to.deep.equal({ name: 'brennen' })
    })
  })

  describe('createMany', () => {
    it('should throw an error if type does not exist', () => {
      expect(() => TestFactory.createMany('cheesecurds', 3)).to.throw()
    })

    it('should throw an error if count is not provided', () => {
      expect(() => TestFactory.createMany('gravy')).to.throw()
    })

    it('should throw an error if count is not greater than 0', () => {
      expect(() => TestFactory.createMany('pulledpork', 0)).to.throw()
    })

    it('should return an array of generated types', () => {
      TestFactory.register('user', () => ({ username: 'bkd705' }))
      expect(TestFactory.createMany('user', 2)).to.have.length(2)
    })
  })
})
