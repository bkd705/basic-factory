import { expect } from 'chai'
import Factory from '../basic-factory'

describe('Factory', () => {
  describe('register', () => {
    it('should add a new type to registeredTypes', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Test Name'
      }))

      expect(() => testFactory.create('Test')).to.not.throw()
    })

    it('should throw error if type already exists', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Test Name'
      }))

      expect(() => testFactory.register('Test', () => {})).to.throw()
    })

    it('should throw an error if return type of generator is not an object', () => {
      const testFactory = Factory()

      expect(() => testFactory.register('NoopTest', f => f)).to.throw()
    })
  })

  describe('create', () => {
    it('should throw an error if type does not exist', () => {
      const testFactory = Factory()

      expect(() => testFactory.create('poutine')).to.throw()
    })

    it('should return a object from type generator', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Brennen'
      }))

      const output = testFactory.create('Test')

      expect(output).to.deep.equal({ name: 'Brennen' })
    })

    it('should overwrite generated values if provided with overwrites', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Brennen'
      }))

      const output = testFactory.create('Test', { name: 'kyle' })

      expect(output.name).to.equal('kyle')
    })
  })

  describe('createMany', () => {
    it('should throw an error if type does not exist', () => {
      const testFactory = Factory()

      expect(() => testFactory.createMany('cheesecurds', 3)).to.throw()
    })

    it('should throw an error if count is not provided', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Brennen'
      }))

      expect(() => testFactory.createMany('Test')).to.throw()
    })

    it('should throw an error if count is not greater than 0', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Brennen'
      }))

      expect(() => testFactory.createMany('Test', 0)).to.throw()
    })

    it('should return an array of generated types', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Brennen'
      }))

      expect(testFactory.createMany('Test', 2)).to.have.length(2)
    })

    it('should overwrite generated values if provided with overwrites', () => {
      const testFactory = Factory()

      testFactory.register('Test', () => ({
        name: 'Brennen'
      }))

      const output = testFactory.createMany('Test', 2, { name: 'kyle' })
      expect(output[0].name).to.equal('kyle')
      expect(output[1].name).to.equal('kyle')
    })
  })
})
