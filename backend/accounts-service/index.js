// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
  trustProxy: "127.25.0.2",
  frameworkErrors: function (error, req, res) {
    if (error instanceof FST_ERR_BAD_URL) {
      res.code(400);
      return res.send("Provided url is not valid");
    } else if (error instanceof FST_ERR_ASYNC_CONSTRAINT) {
      res.code(400);
      return res.send("Provided header is not valid");
    } else {
      res.send(err);
    }
  },
});

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

fastify.post("/", async (req, res) => {
  console.log(req.body);
  res.status(304);
});

fastify.listen(
  { host: dev_env ? "127.25.0.4" : undefined, port: EnvVars.PORT },
  (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
);
