const Pool = require("pg").Pool;
const keys = require("./keys");
const pool = new Pool({
  user: keys.postgresdb.user,
  host: keys.postgresdb.host,
  database: keys.postgresdb.database,
  password: keys.postgresdb.password,
  port: keys.postgresdb.port,
  ssl: keys.postgresdb.ssl,
});

module.exports = pool;
