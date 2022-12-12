// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

const EnvVars = process.env;
const dev_env =
  process.argv.splice(2).find((t) => t.match(/(--dev|-D)/)).length > 0;

if (dev_env) {
  console.log(
    `${__dirname.split("\\").pop()} running in developmemnt environment`
  );
}

// Declare a route
fastify.get("/", (request, reply) => {
  reply.send({ message: "hello world", app: "accounts-service" });
});

fastify.listen(
  { host: dev_env ? "127.25.0.1" : undefined, port: EnvVars.PORT },
  (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
);
