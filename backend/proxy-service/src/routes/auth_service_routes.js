module.exports = (fastify = require("fastify")({ logger: true })) => {
  fastify.get("/accounts/", async (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        app: "proxy-service",
        service: "accounts",
        data: {
          data: "hello world",
        },
      });
  });

  return fastify;
};
