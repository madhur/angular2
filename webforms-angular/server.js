var express = require('express');
var app = express();

var fs = require('fs');

app.use(express.static('public'));

console.log(__dirname);

app.use(express.static(__dirname + '/dist'));


app.use('/cricket/:matchId', express.static(__dirname + '/dist/index.html'));

app.use('/cricket-api/:matchId', express.static(__dirname + '/public/946.json'));

app.use(function(req, res, next) {
   if(req.url.substr(-1) == '/' && req.url.length > 1)
       res.redirect(301, req.url.slice(0, -1));
   else
       next();
});


const port  = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});