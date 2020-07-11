import fs from "fs";
import path from "path";
import { ApolloServer, gql } from "apollo-server-lambda";
import resolvers from "../../resolvers";

const findSchema = (dir: string, depth?: number): string => {
  if (!depth) {
    depth = 0;
  }
  if (depth > 20) {
    return "";
  }
  const schemaPath = dir.concat("/schema.graphql");
  if (fs.existsSync(schemaPath)) {
    return schemaPath;
  } else {
    return findSchema(path.normalize(dir.concat("/..")), depth + 1);
  }
};

const curerntDir: string = __dirname;

const typeDefs = gql(fs.readFileSync(findSchema(curerntDir), "utf8"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

export const handler = server.createHandler();
