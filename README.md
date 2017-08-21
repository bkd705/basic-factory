# Basic Factory

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
  import BasicFactory from 'basic-factory'
  ```
3. Initialize a new Factory
  ```javascript
  const MyFactory = new BasicFactory()
  ```
4. Register your Factory generators
  ```javascript
  MyFactory.register('User', () => {
    // Would probably use Faker or something to generate these fields randomly.
    return {
      username: `user${Math.random() * 100}`,
      email: `user${Math.random() * 100}`
    }
  })
  ```
5. Export your Factory instance
  ```javascript
  export default MyFactory
  ```
6. Use factory in other files
  ```javascript
  import MyFactory from '{appDir}/helpers/factories'

  const oneUser = MyFactory.create('User')
  const arrayOfUsers = MyFactory.createMany('User', 5)
  ```

### API Documentation

#### Factory Class
----

__Creating Instance__
- To use simple-factory you must initialize a new instance of the factory in the file you will register your factories.
  `const MyFactory = new BasicFactory()`

__Instance Methods__
| Method Name | Description | Arguments | Returns | Notes |
|---|---|---|---|---|
| __Factory.register__ | Method used to register a new mock data type. |1. `type: string` - mock data type name (ie. 'User')  <br /> 2. `generator: Function` - mock data type generator | N/A | - Generator function must return an object <br /> - Cannot register two mock data types with the same name |
| __Factory.create__ | Method used to generate a mock dataset of a type | 1. `type: string` - mock data type name (ie. 'User') | Object filled by matching `type`'s generator output. | - Mock data type name must be registered |
| __Factory.createMany__ | Method used to generate an array of mock datasets of a type | 1. `type: string` -  mock data type name (ie. 'User') <br /> 2. `count: number` - amount of datasets to create | `count` length array of objects filled by matching `type`'s generator output. | - Count must be greater than 0 |

### Project Development

- `yarn` / `npm install`
- `yarn test` / `npm run test`


### Contributing

This is a cool open source project and everyone should totally contribute to it if you use it or want to make it better!

- Fork repository.
- Clone your fork.
- Checkout into a branch.
- Make changes.
- Make pull request to this repository in `development` branch.
- Wait for someone to review and merge it!
