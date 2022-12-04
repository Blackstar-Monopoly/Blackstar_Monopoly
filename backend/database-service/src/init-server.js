// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// // Docker Env:
// const mongo_db_1 = `mongodb://db_001:password@mongo-db-1:27017`;
// const mongo_db_2 = `mongodb://db_002:password@mongo-db-2:27017`;
// const postgres_db = `postgres://root:amind@postgres-db/Structured_Store`;
// Development Env:
const mongo_db_1 = `mongodb://db_001:password@127.0.0.1:2010`;
const mongo_db_2 = `mongodb://db_002:password@127.0.0.1:2020`;
const postgres_db = `postgres://root:admin@127.0.0.1:2030/Structured_Store`;

const mongodb = require("mongodb");
mongodb.MongoClient.connect(mongo_db_1, {
  connectTimeoutMS: 20000,
  directConnection: true,
})
  .then(() => console.log("MongoDB 1 connected"))
  .then((client) => {
    // const fastify = require("fastify")();

    fastify.register(require("@fastify/mongodb"), { client: client });
    // .register(function (fastify, opts, next) {
    //   const db = fastify.mongo.client.db("mydb");
    //   ...
    //   ...
    //   ...
    //   next();
    // });
  })
  .catch((err) => {
    throw err;
  });

// fastify.register(require("@fastify/postgres"), {
//   connectionString: postgres_db,
// });

// postgress query wrapper
function PostgresQuery(func_body = (client) => {}) {
  return async (req, reply) => {
    const client = await fastify.pg.connect();
    try {
      return func_body(client);
    } finally {
      // Release the client immediately after query resolves, or upon error
      client.release();
    }
  };
}

module.exports = fastify;
