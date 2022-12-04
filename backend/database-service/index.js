const fastify = require("./src/init-server");
const EnvVars = process.env;

// Declare a route
fastify.get("/", (request, reply) => {
  reply.send({ message: "hello world", app: "database-service" });
});

// Run the server!
fastify.listen({ port: EnvVars.PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
