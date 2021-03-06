const router = require('express').Router();
const pool = require('../database/connection');

router.post('/', function(req, res){
  pool.connect(function(err, client, done){
    console.log(req.body);
    try {
      if(err) {
        console.log('Error connecting to the DB at WISH POST: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('INSERT INTO wishlist (title, description, platforms, game_image, site_detail_url) VALUES ($1, $2, $3, $4, $5) returning *',
                  [req.body.title, req.body.description, req.body.platform, req.body.game_image, req.body.site_detail_url],
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
        console.log('Error connecting to the DB at WISH GET: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('SELECT * FROM wishlist',
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
        console.log('Error connecting to the DB at WISH DEL: ', err);
        res.sendStatus(500);
        return;
      }
      client.query('DELETE FROM wishlist WHERE id=$1;', [id],
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
