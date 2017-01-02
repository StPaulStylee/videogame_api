const router = require('express').Router();
const pool = require('../database/connection');

router.post('/', function(req, res){
  pool.connect(function(err, client, done){

    try {
      if(err) {
        console.log('Error connecting to the DB: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('INSERT INTO favorites (title, description, release_date, platforms, game_rating, game_image) VALUES ($1, $2, $3, $4, $5, $6) returning *',
                  [req.body.title, req.body.description, req.body.release_date, req.body.platforms, req.body.game_rating, req.body.game_image],
                  function (err, result) {
                    if (err) {
                      console.log('Issue quering the DB:', err);
                      res.sendStatus(500);
                      return;
                    }
                    res.send(result.rows);
                  });
    } finally {
      done();
    }
  });
});


module.exports = router;
