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
  reply.send({ hello: "world", app: "proxy-service" });
});

module.exports = { fastify, EnvVars, dev_env };
