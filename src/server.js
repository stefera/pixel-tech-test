const { ApolloServer } = require("@apollo/server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

console.log(typeDefs, resolvers);

async function startApolloServer() {}
// console.log(`
//   Server is running at ${url}
//   `);

startApolloServer();
