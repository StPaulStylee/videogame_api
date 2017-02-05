const router = require('express').Router();
const pool = require('../database/connection');

router.post('/', function(req, res){
  pool.connect(process.env.DATABASE_URL, function(err, client, done){

    try {
      if(err) {
        console.log('Error connecting to the DB at FAV POST: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('INSERT INTO favorites (title, description, release_date, platforms, game_rating, game_image, favorite_comment, site_detail_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *',
                  [req.body.name, req.body.description, req.body.release_date, req.body.platforms, req.body.game_rating, req.body.game_image, req.body.favorite_comment, req.body.site_detail_url],
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
        console.log('Error connecting to the DB at FAV GET: ', err);
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
        console.log('Error connecting to the DB at FAV DEL: ', err);
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

router.put('/:id', function(req, res){
  var id = req.params.id;
  var comment = req.body.favorite_comment;
  console.log(req.params);
  console.log(req.body);
  pool.connect(function(err, client, done){
    try {
      if(err) {
        console.log('Error connecting to the DB at FAV EDIT: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('UPDATE favorites SET favorite_comment=$1 WHERE id=$2 RETURNING *;', [comment, id],
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




module.exports = router;
