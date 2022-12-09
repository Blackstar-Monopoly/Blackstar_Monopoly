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
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const connect_mongo = async (
  uriString = "mongodb://localhost:27017",
  dbName = "Mongo1"
) => {
  for (let tries = 0; tries < 4; tries++) {
    try {
      return await mongodb.MongoClient.connect(uriString, {
        connectTimeoutMS: 20000,
        directConnection: true,
      }).then((client) => {
        console.log(`${dbName} connected`);
        return {
          client: client,
          name: dbName,
        };
      });
    } catch (err) {
      if (tries < 3) {
        console.log(err.message, " tries: ", tries + 1);
        await sleep(5000);
        continue;
      }
      throw new Error(err.message);
    }
  }
  throw new Error(`${dbName} didn't connect`);
};

async function ConnectMongo() {
  const db_001 = await connect_mongo(mongo_db_1, "mongo_broker");
  fastify.register(require("@fastify/mongodb"), db_001);

  const db_002 = await connect_mongo(mongo_db_2, "mongo_store");
  fastify.register(require("@fastify/mongodb"), db_002);

  try {
    fastify.register(require("@fastify/postgres"), {
      connectionString: postgres_db,
    });
    console.log("Postgresql DB connected");
  } catch (errr) {
    console.log(errr.message);
  }

  return fastify;
}

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

module.exports = { ConnectMongo };
