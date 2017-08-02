export default class Factory {
  registeredTypes = {}

  register = (type, generator) => {
    if (this.registeredTypes[type])
      throw new Error(`Type ${type} already exists.`)

    if (typeof generator() != 'object')
      throw new Error('generator must return an object')

    this.registeredTypes[type] = generator
  }

  create = type => {
    if (this.registeredTypes[type] === undefined)
      throw new Error(`Type ${type} does not exist.`)

    return this.registeredTypes[type]()
  }

  createMany = (type, count) => {
    if (this.registeredTypes[type] === undefined)
      throw new Error(`Type ${type} does not exist.`)

    return [...Array(count)].map(i => this.registeredTypes[type]())
  }
}
