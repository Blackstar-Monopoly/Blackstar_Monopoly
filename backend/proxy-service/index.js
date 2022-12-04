// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

const EnvVars = process.env;

// Declare a route
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world", app: "proxy-service" });
});

// Run the server!
fastify.listen({ port: EnvVars.PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
