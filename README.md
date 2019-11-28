# Basic Factory

[![Build Status](https://travis-ci.org/bkd705/basic-factory.svg?branch=master)](https://travis-ci.org/bkd705/basic-factory)

A basic tool providing an easy way to generate blocks of mock data for tests or as placeholders.

### Basic Usage

1. Install NPM package

```
  npm install --save-dev basic-factory
  // OR YARN
  yarn add --dev basic-factory
```

2. Import Factory in `{appDir}/helpers/factories.js`

```javascript
// ES6
import BasicFactory from 'basic-factory'
```

3. Initialize a new Factory

```javascript
const factory = BasicFactory()
```

4. Register your Factory generators

```javascript
factory.register('User', () => {
  // Would probably use Faker or something to generate these fields randomly.
  return {
    username: `user${Math.random() * 100}`,
    email: `user${Math.random() * 100}`
  }
})
```

5. Export your Factory instance

```javascript
export default factory
```

6. Use factory in other files

```javascript
import factory from '{appDir}/helpers/factories'

const oneUser = factory.create('User')
const arrayOfUsers = factory.createMany('User', 5)
```

### Project Development

- `yarn` / `npm install`
- `yarn test` / `npm run test`

### Contributing

See [CONTRIBUTING.md](https://github.com/bkd705/basic-factory/blob/master/CONTRIBUTING.md)
