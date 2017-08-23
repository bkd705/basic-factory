import { expect } from 'chai'
import Factory from '../Factory'

describe('Factory', () => {
  let TestFactory

  beforeEach(() => {
    TestFactory = new Factory()

    TestFactory.register('Test', () => ({
      name: 'brennen'
    }))
  })

  describe('register', () => {
    it('should add a new type to registeredTypes', () => {
      expect(TestFactory.registeredTypes).to.have.property('Test')
    })

    it('should throw error if type already exists', () => {
      expect(() => TestFactory.register('Test', () => {})).to.throw()
    })

    it('should throw an error if return type of generator is not an object', () => {
      expect(() => TestFactory.register('NoopTest', f => f)).to.throw()
    })
  })

  describe('create', () => {
    it('should throw an error if type does not exist', () => {
      expect(() => TestFactory.create('poutine')).to.throw()
    })

    it('should return a object from type generator', () => {
      const output = TestFactory.create('Test')
      expect(output).to.deep.equal({ name: 'brennen' })
    })

    it('should overwrite generated values if provided with overwrites', () => {
      const output = TestFactory.create('Test', { name: 'kyle' })
      expect(output.name).to.equal('kyle')
    })
  })

  describe('createMany', () => {
    it('should throw an error if type does not exist', () => {
      expect(() => TestFactory.createMany('cheesecurds', 3)).to.throw()
    })

    it('should throw an error if count is not provided', () => {
      expect(() => TestFactory.createMany('Test')).to.throw()
    })

    it('should throw an error if count is not greater than 0', () => {
      expect(() => TestFactory.createMany('Test', 0)).to.throw()
    })

    it('should return an array of generated types', () => {
      expect(TestFactory.createMany('Test', 2)).to.have.length(2)
    })

    it('should overwrite generated values if provided with overwrites', () => {
      const output = TestFactory.createMany('Test', 2, { name: 'kyle' })
      expect(output[0].name).to.equal('kyle')
      expect(output[1].name).to.equal('kyle')
    })
  })
})
