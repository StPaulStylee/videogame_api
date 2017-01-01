const pg = require('pg');

const config = {
  user: 'postgres',
  database: 'vgAPI',
  password: 'Finally!',
  host: 'localhost',
  port: 5432,
}

const pool = new pg.Pool(config);
//console.log('From connection.js: ', pool);

module.exports = pool;
