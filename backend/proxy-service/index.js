const { fastify, EnvVars, dev_env } = require("./src/init_server.js");

// Run the server!
fastify.listen(
  {
    host: dev_env ? "127.25.0.2" : undefined,
    port: EnvVars.PORT,
  },
  (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
);
