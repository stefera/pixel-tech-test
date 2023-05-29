const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs }); // create new instance of ApolloServer with typeDefs passed in as the schema
  const { url } = await startStandaloneServer(server); // ADD NOTE

  console.log(`
  Server is running at ${url}
  `);
}

startApolloServer();
