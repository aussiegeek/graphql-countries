import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.info(`Listening on http://localhost:${PORT}/`);
});
