import { overwriteMerge } from './lib/objectMerge'

export default class Factory {
  constructor() {
    this.registeredTypes = {}
  }

  register = (type, generator) => {
    if (this.registeredTypes[type]) {
      throw new Error(`Type ${type} already exists.`)
    }

    if (typeof generator() != 'object') {
      throw new Error('generator must return an object')
    }

    this.registeredTypes[type] = generator
  }

  create = (type, overwrites) => {
    if (this.registeredTypes[type] === undefined) {
      throw new Error(`Type ${type} does not exist.`)
    }

    if (overwrites) {
      return overwriteMerge(this.registeredTypes[type](), overwrites)
    }

    return this.registeredTypes[type]()
  }

  createMany = (type, count, overwrites) => {
    if (this.registeredTypes[type] === undefined) {
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
        overwriteMerge(this.registeredTypes[type](), overwrites)
      )
    }

    return [...Array(count)].map(i => this.registeredTypes[type]())
  }
}
