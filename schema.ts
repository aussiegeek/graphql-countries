import { loadSchemaSync } from "@graphql-tools/load";
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
import { addResolversToSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

const schema = addResolversToSchema({
  schema: loadSchemaSync("./schema.graphql", {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers,
});

export default schema;
