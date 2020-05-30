import { printIntrospectionSchema } from "graphql";

const schemaComposer = require("graphql-compose").schemaComposer;

schemaComposer.createObjectTC({
  name: "Country",
  fields: {
    name: "String!",
  },
});

const schema = schemaComposer.buildSchema();

console.log(printIntrospectionSchema(schema));
