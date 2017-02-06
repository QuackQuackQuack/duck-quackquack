var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var jsonfile = require('jsonfile');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'hc63ms4f30v9qmux',
  password: 'rxiygu7c7uhfa6vy',
  database: 'umk7koigwguqtawj'
});


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/json', express.static(__dirname + '/json'));
app.set('port', (process.env.PORT || 5000));


var file = './json/data.json';
var sqlData = [];

app.get('/', function (req, res) {
  var sql = 'SELECT * FROM deal';
  connection.query(sql, function (err, rows) {
    if (err) {
      console.log(err);
    } else {
      var leng = rows.length;
      for (var i = 0; i < leng; i++) {
        sqlData = rows;
        jsonfile.writeFileSync(file, sqlData);
      }
    }
  });
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/list', function (req, res) {
  var sql = 'SELECT * FROM deal';
  connection.query(sql, function (err, rows) {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  });
});


//Write
app.post('/add', function (req, res) {
  // console.log('dasdas');
  var title = req.body.title;
  var subTitle = req.body.sub_title;
  var cost = req.body.cost;
  var price = req.body.price;
  var quantity = req.body.quantity;
  var sql = 'INSERT INTO deal (title, sub_title, cost, price, quantity) VALUES(?, ?, ?, ?, ?)';
  connection.query(sql, [title, subTitle, cost, price, quantity], function (err, rows) {
    if (err) {
      res.status(500).send('Internal Server Error');
      console.log(err);
    } else {

      var sql = 'SELECT * FROM deal';
      connection.query(sql, function (err, rows) {
        if (err) {
          console.log(err);
        } else {
          var leng = rows.length;
          for (var i = 0; i < leng; i++) {
            sqlData = rows;
            jsonfile.writeFileSync(file, sqlData);
            return res.redirect('/#/list');
          }
        }
      });
    }
  });
});


//Edit
app.get('/api/edit/:id/', function (req, res) {
  var id = req.params.id;
  var sql = 'SELECT * FROM deal WHERE id=?';
  connection.query(sql, [id], function (err, rows) {
    if (err) {
      res.status(500).send('Internal Server Error');
      console.log(err);
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/edit/:id/', function (req, res) {
  var sql = 'UPDATE deal SET title=:t, subtitle=:s, cost=:c, price:p, quantity:q WHERE @id=:id';
  var id = req.params.id;
  var title = req.body.title;
  var subtitle = req.body.subtitle;
  var cost = req.body.cost;
  var price = req.body.price;
  var quantity = req.body.quantity;
  db.query(sql, {
    params: {
      t: title,
      s: subtitle,
      c: cost,
      p: price,
      q: quantity,
      id: id
    }
  }).then(function () {
    res.redirect('/#/view/:id');
  });
});







app.listen(app.get('port'), function () {
  console.log('Node app running on port', app.get('port'));
});