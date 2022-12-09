const { fastify } = require("./src/init-server");
const { ConnectMongo } = require("./src/init-server");
const EnvVars = process.env;

// Run the server!

ConnectMongo().then((fastify) => {
  // Declare a route
  fastify.get("/", (request, reply) => {
    reply.send({ message: "hello world", app: "database-service" });
  });

  fastify.listen({ port: EnvVars.PORT }, (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
});
