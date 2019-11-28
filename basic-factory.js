import { overwriteMerge } from './lib/objectMerge'

export default function Factory() {
  const registeredTypes = {}

  function register(type, generator) {
    if (registeredTypes[type]) {
      throw new Error(`Type ${type} already exists.`)
    }

    if (typeof generator() != 'object') {
      throw new Error('generator must return an object')
    }

    registeredTypes[type] = generator
  }

  function create(type, overwrites) {
    if (registeredTypes[type] === undefined) {
      throw new Error(`Type ${type} does not exist.`)
    }

    if (overwrites) {
      return overwriteMerge(registeredTypes[type](), overwrites)
    }

    return registeredTypes[type]()
  }

  function createMany(type, count, overwrites) {
    if (registeredTypes[type] === undefined) {
      throw new Error(`Type ${type} does not exist.`)
    }

    if (isNaN(count)) {
      throw new Error(`Count must be provided as a number.`)
    }

    if (count <= 0) {
      throw new Error(`Count must be greater than 0.`)
    }

    if (overwrites) {
      return [...Array(count)].map(i =>
        overwriteMerge(registeredTypes[type](), overwrites)
      )
    }

    return [...Array(count)].map(i => registeredTypes[type]())
  }

  return {
    register,
    create,
    createMany
  }
}
