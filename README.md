# Simple Factory

A basic tool providing an easy way to generate blocks of mock data for tests or as placeholders.

### Usage

1. Import Factory in `{appDir}/helpers/factories.js`
  ```
  import Factory from 'simple-factory'
  ```
2. Initialize a new Factory
  ```
  const MyFactory = new Factory()
  ```
3. Register your Factory generators
  ```
  MyFactory.register('User', () => {
    // Would probably use Faker or something to generate these fields randomly.
    return {
      username: `user${Math.random() * 100}`,
      email: `user${Math.random() * 100}`
    }
  })
  ```
4. Export your Factory instance
  ```
  export default MyFactory
  ```
5. Use factory in other files
  ```
  import MyFactory from '{appDir}/helpers/factories'

  const oneUser = MyFactory.create('User')
  const arrayOfUsers = MyFactory.createMany('User', 5)
  ```

### API Documentation

#### Factory Class

-

__Creating Instance__
- To use simple-factory you must initialize a new instance of the factory in the file you will register your factories.
  `const MyFactory = new Factory()`

__Factory.register__ | Method used to register a new mock data type.
- Takes two arguments
  1. `type: string` - mock data type name (ie. 'User')
  2. `generator: Function` - mock data type generator
- Generator function must return an object
- Cannot register two mock data types with the same name

__Factory.create__ | Method used to generate a mock dataset of a type
- Takes one argument
  1. `type: string` - mock data type name (ie. 'User')
- Mock data type name must be registered
- Returns object created by matching type's generator passed in `register`

__Factory.createMany__ | Method used to generate an array of mock datasets of a type
- Takes two arguments
  1. `type: string` -  mock data type name (ie. 'User')
  2. `count: number` - amount of datasets to create
- Returns an array of objects created by matching type's generator passed in `register`
- count must be greater than 0

### Running Project

There isn't anything other than just tests, so heres how to run tests.

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
