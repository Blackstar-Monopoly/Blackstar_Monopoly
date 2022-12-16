// Require the framework and instantiate it
// const fastly = require("fastify")({ logger: true });
var fastify = require("./routes/auth_service_routes")();

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
