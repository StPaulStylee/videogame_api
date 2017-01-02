const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const favorites = require('./routes/favorites');
// const router = require('router'); Router placed on this line
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/favorites', favorites);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
  console.log('Listening on port', server.address().port);
});
