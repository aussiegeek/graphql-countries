import fs from "fs";
import path from "path";
import { ApolloServer, gql } from "apollo-server-lambda";
import { APIGatewayProxyResult, Callback, Handler } from "aws-lambda";
import resolvers from "../../src/resolvers";

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

export const handler: Handler = async function (event, context) {
  let startTime = Date.now();
  let ev = hny.newEvent();
  ev.add({ durationMs: Date.now() - startTime });

  return new Promise((resolve, reject) => {
    const cb: Callback<APIGatewayProxyResult> = (error, result) => {
      if (error) {
        ev.add({ error });
        ev.send();
        reject(error);
      }

      if (result) {
        ev.add({ "response.statusCode": result.statusCode });
        ev.send();
        resolve(result);
      }

      reject("No error or result");
    };
    server.createHandler({
      cors: {
        origin: "*",
      },
    })(event, context, cb);
  });
};
