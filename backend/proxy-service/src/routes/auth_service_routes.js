module.exports = (fastify = require("fastify")({ logger: true })) => {
  const app = "proxy-service";
  const service = "accounts";

  fastify.get("/accounts/", async (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        app,
        service,
        data: {
          data: "hello world",
        },
      });
  });
  fastify.post("/accounts/", async (request, reply) => {
    console.log(request.body);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        app,
        service,
        data: {
          data: "hello world from post api",
        },
      });
  });

  return fastify;
};
