import fs from "fs";
import { ApolloServer, gql } from "apollo-server-lambda";
import resolvers from "./resolvers";
const typeDefs = gql(
  fs.readFileSync(__dirname.concat("/../schema.graphql"), "utf8")
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

export default server;
