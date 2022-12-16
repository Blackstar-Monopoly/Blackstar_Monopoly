const url = "/account/";
const GET = "GET";
const POST = "POST";

const routes = [
  {},
  {
    method: GET,
    url,
    schema: {
      querystring: {
        name: { type: "string" },
        excitement: { type: "integer" },
      },
      response: {
        200: {
          type: "object",
          properties: {
            source: { type: "string" },
            data: { type: "object" },
          },
        },
      },
    },
    handler: function (request, reply) {
      reply.send({ hello: "world" });
    },
  },
];
