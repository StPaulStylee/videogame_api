const pg = require('pg');

// pg.defaults.ssl = true;

const config = {
  user: 'postgres',
  database: 'vgAPI',
  password: 'Finally!',
  host: 'localhost',
  port: 5432,
}

const pool = new pg.Pool(config);

module.exports = pool;
