const dotenv = require("dotenv");
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
  development: {
    databases: {
      rentify: {
        username: process.env.DB_USERNAME1,
        password: process.env.DB_PASSWORD1,
        database: process.env.DB_DATABASE1,
        host: process.env.DB_HOST1,
        port: process.env.DB_PORT1,
        dialect: "postgres",
        logging: false,
      },
    },

    es_node1: process.env.ELASTICSEARCH_NODE1,
    es_node2: process.env.ELASTICSEARCH_NODE2,
    es_node3: process.env.ELASTICSEARCH_NODE3,
    es_username: process.env.ELASTIC_USERNAME,
    es_password: process.env.ELASTIC_PASSWORD,

    logging: false,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
  },

  rentify: {
    username: process.env.DB_USERNAME1,
    password: process.env.DB_PASSWORD1,
    database: process.env.DB_DATABASE1,
    host: process.env.DB_HOST1,
    port: process.env.DB_PORT1,
    dialect: "postgres",
  },

  production: {
    databases: {
      oriel: {
        username: process.env.DB_USERNAME1,
        password: process.env.DB_PASSWORD1,
        database: process.env.DB_DATABASE1,
        host: process.env.DB_HOST1,
        port: process.env.DB_PORT1,
        dialect: "postgres",
        logging: false,
      },
    },

    logging: false,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
  },
};
