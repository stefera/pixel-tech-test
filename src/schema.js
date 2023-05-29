const gql = require("graphql-tag"); /// allows us to create template literals that it then converts to GraphQL objects

const typeDefs = gql`
  type Query {
    "Get an array of dogs for the client (if built)"
    dogs: [Dog!]!
    "Get one specific dog by its ID. Must receive a id parameter"
    dogById(id: Int!): Dog!
    "Get an array of dogs by their breed name. Must receive a breed name parameter"
    dogByBreed(breed: String!): [Dog!]
  }
  type Mutation {
    createDog(name: String): String
  }
  "A dog is a very good boy"
  type Dog {
    id: ID!
    name: String!
    breed: String!
    "custom field could be created for date here, but for now DD-MM-YYYY string format used"
    dateOfBirth: String!
    imageURL: String
    weight: Int
  }
`;

module.exports = typeDefs;
