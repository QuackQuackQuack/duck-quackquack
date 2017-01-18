var express = require('express');
var path = require('path');
var jsonfile = require('jsonfile');

var app = express();
//app.use('/dist', express.static(__dirname + '/dist'));
//app.use('/json', express.static(__dirname + '/json'));
app.set('port', (process.env.PORT || 5000));


app.get('/', function (req, res) {
  res.send('dasdasds');
});

app.listen(app.get('port'), function () {
  console.log('Node app running on port', app.get('port'));
});
