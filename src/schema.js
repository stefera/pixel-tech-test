const gql = require("graphql-tag"); /// allows us to create template literals that it then converts to GraphQL objects

const typeDefs = gql`
  type Query {
    "Get an array of all dogs"
    dogs: [Dog!]!

    """
    Get a single dog by its ID. Must receive an integer as an id arg.
    Must return one object that matches type Dog.
    """
    dogById(id: Int!): Dog!

    """
    Get an array of dogs by their breed name. Must receive a string as a breed name arg.
    Must return an array of objects that match type Dog, although array could be empty
    """
    dogByBreed(breed: String!): [Dog!]!
  }
  type Mutation {
    """
    minimum required to create a dog are the three mandatory fields. (id created dynamically by resolver)
    must return a new array of dogs with the object added onto the end.
    """
    createDog(name: String!, breed: String!, dateOfBirth: String!): [Dog!]!
  }
  "A dog is a very good boy"
  type Dog {
    id: ID!
    name: String!
    breed: String!
    "custom field could be created for date here, but for now DD-MM-YYYY string format used"
    dateOfBirth: String!
    imageUrl: String
    weight: Int
  }
`;

// could create second custom type for list of dogs? although seems relatively redundant given server size.

module.exports = typeDefs;
