const { ConnectMongo } = require("./src/init-server");
const EnvVars = process.env;

const dev_env =
  process.argv.splice(2).find((t) => t.match(/(--dev|-D)/)).length > 0;

if (dev_env) {
  console.log(
    `${__dirname.split("\\").pop()} running in developmemnt environment`
  );
}

// Run the server!
ConnectMongo().then((fastify) => {
  // Declare a route
  fastify.get("/", (request, reply) => {
    reply.send({ message: "hello world", app: "database-service" });
  });

  fastify.listen(
    { host: dev_env ? "127.25.0.6" : undefined, port: EnvVars.PORT },
    (err) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    }
  );
});
