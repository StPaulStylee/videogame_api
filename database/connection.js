const pg = require('pg');

const config = {
  user: 'hihfchxuiccucy',
  database: 'd13i112q0cg4r5',
  password: '6e1459a4ee225efffdf040cbf41ec381b4303d3b5f839e4a78ef5976264124cc!',
  host: 'ec2-75-101-142-182.compute-1.amazonaws.com',
  port: 5432,
}

const pool = new pg.Pool(config);

module.exports = pool;
