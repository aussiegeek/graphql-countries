import fs from "fs";
import path from "path";
import { ApolloServer, gql } from "apollo-server-lambda";
import { Handler } from "aws-lambda";
import resolvers from "../../resolvers";

const Libhoney = require("libhoney");
let hny = new Libhoney({
  writeKey: process.env["HONEY_WRITE_KEY"],
  dataset: "graphqlcountries",
});

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

const apolloHandler = server.createHandler();

export const handler: Handler = (evt, context, callback) => {
  let startTime = Date.now();
  let ev = hny.newEvent();
  ev.add({ durationMs: Date.now() - startTime });

  apolloHandler(evt, context, (error, result) => {
    if (result) {
      ev.add({ "response.statusCode": result.statusCode });
    }
    if (error) {
      ev.add({ error });
    }
    ev.send();
    callback(error, result);
  });
};
