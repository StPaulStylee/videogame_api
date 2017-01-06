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
      client.query('INSERT INTO favorites (title, description, release_date, platforms, game_rating, game_image, favorite_comment) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *',
                  [req.body.title, req.body.description, req.body.release_date, req.body.platforms, req.body.game_rating, req.body.game_image, req.body.favorite_comment],
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

router.get('/', function(req, res){
  pool.connect(function(err, client, done){
    try {
      if(err) {
        console.log('Error connecting to the DB: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('SELECT * FROM favorites',
        function(err, result){
          if(err){
            console.log('Error querying the DB: ', err);
            res.sendStatus(500);
            return;
          }
          res.send(result.rows);
        });
    }
    finally{
      done();
    }
  });
});

router.delete('/:id', function(req, res){
  var id = req.params.id;
  console.log(req.params);
  pool.connect(function(err, client, done){
    try {
      if(err) {
        console.log('Error connecting to the DB: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('DELETE FROM favorites WHERE id=$1;', [id],
        function(err, result){
          if(err){
            console.log('Error querying the DB: ', err);
            res.sendStatus(500);
            return;
          }
          res.sendStatus(204);
        });
    }
    finally{
      done();
    }
  });
});


module.exports = router;
