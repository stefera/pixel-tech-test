const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { expressMiddleware } = require("@apollo/server/express4");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers }); // create new instance of ApolloServer with typeDefs and resolvers passed in as the schema
  const { url } = await startStandaloneServer(server);

  console.log(`
  Server is running at ${url}
  `);

  return server;
}

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@pixeldogscluster.dnns6ii.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    return startApolloServer();
  })
  .then((server) => {
    app.use("/4000", expressMiddleware(server));
  })
  .catch((err) => console.log(err));
