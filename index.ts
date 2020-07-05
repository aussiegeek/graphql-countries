import server from "./server";
const PORT = process.env.PORT || 3000;

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.info(`Listening on ${url}`);
});
