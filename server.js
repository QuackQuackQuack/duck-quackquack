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

app.post('/edit/:id', function (req, res) {
  var title = req.body.title;
  var subtitle = req.body.sub_title;
  var cost = req.body.cost;
  var price = req.body.price;
  var quantity = req.body.quantity;
  var id = req.params.id;
  var sql = 'UPDATE deal SET title=?, sub_title=?, cost=?, price=?, quantity=? WHERE id=?';
  connection.query(sql, [title, subtitle, cost, price, quantity, id], function (err, rows) {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/#/view/' + id);
    }
  });
});

var data1 = {
  "data": {
    "photoTotalCount": 20,
    "pointSaveInformation": {
      "guide": "<i></i>포토후기 등록 시 <em>100P</em> 적립, 일반후기 등록 시 <em>50P</em> 적립!"
    },
    "reviewList": {
      "list": [
        {
          "content": "데이터 1입니다.",
          "image": {
            "attachSeq": 0,
            "height": 0,
            "reviewAttachfile": {
              "attachDir": "string",
              "attachHeight": 0,
              "attachName": "string",
              "attachSeq": 0,
              "attachSize": 0,
              "attachWidth": 0,
              "delYn": "string",
              "modifyDate": "string",
              "regDate": "string",
              "thumbMobileName": "string",
              "thumbMobilePixelCd": 0,
              "thumbMobileSize": 0,
              "thumbPcName": "string",
              "thumbPcPixelCd": 0,
              "thumbPcSize": 0
            },
            "thumbPixelCd": 0,
            "url": "http://img.wemep.co.kr/wmp-review/22/170301/61/61a71cce91b8c0706667144223ccdce4c11472d5.jpg",
            "width": 0
          },
          "isFavorited": true,
          "isMine": true,
          "isReported": true,
          "orderInfo": {
            "optNo": 0,
            "optTitle": "string",
            "orderNo": 0,
            "paymentId": 0,
            "prodNm": "string",
            "prodNo": 0,
            "totalAmount": 0
          },
          "regDate": "string",
          "reviewLikeCount": 0,
          "reviewSeq": 0,
          "thumbImage": {
            "attachSeq": 0,
            "width": 180,
            "height": 180,
            "reviewAttachfile": {
              "attachDir": "string",
              "attachHeight": 0,
              "attachName": "string",
              "attachSeq": 2204570,
              "attachSize": 0,
              "attachWidth": 0,
              "delYn": "string",
              "modifyDate": "string",
              "regDate": "string",
              "thumbMobileName": "string",
              "thumbMobilePixelCd": 0,
              "thumbMobileSize": 0,
              "thumbPcName": "string",
              "thumbPcPixelCd": 0,
              "thumbPcSize": 0
            },
            "thumbPixelCd": 0,
            "url": "http://img.wemep.co.kr/wmp-review/12/170418/a8/a80a90279c2ae00621751848375e83140b4d653a_pc.jpg",
          },
          "totalSatisfaction": 0,
          "totalSatisfactionPoint": 0,
          "userId": "qaqaqa******"
        }
      ],
      "paging": {
        "blockEnd": 1,
        "blockStart": 10,
        "limit": 10,
        "page": 1,
        "totalCount": 10,
        "totalPage": 1
      }
    },
    "satisfactionInfo": {
      "satisfaction": 0,
      "total": 0
    },
    "usePointSave": true,
    "useSnsShare": true
  }
}

var data1_sort = {
  "data": {
    "photoTotalCount": 20,
    "pointSaveInformation": {
      "guide": "<i></i>포토후기 등록 시 <em>100P</em> 적립, 일반후기 등록 시 <em>50P</em> 적립!"
    },
    "reviewList": {
      "list": [
        {
          "content": "라라라라라라라라라라라",
          "image": {
            "attachSeq": 0,
            "height": 0,
            "reviewAttachfile": {
              "attachDir": "string",
              "attachHeight": 0,
              "attachName": "string",
              "attachSeq": 0,
              "attachSize": 0,
              "attachWidth": 0,
              "delYn": "string",
              "modifyDate": "string",
              "regDate": "string",
              "thumbMobileName": "string",
              "thumbMobilePixelCd": 0,
              "thumbMobileSize": 0,
              "thumbPcName": "string",
              "thumbPcPixelCd": 0,
              "thumbPcSize": 0
            },
            "thumbPixelCd": 0,
            "url": "http://img.wemep.co.kr/wmp-review/22/170301/61/61a71cce91b8c0706667144223ccdce4c11472d5.jpg",
            "width": 0
          },
          "isFavorited": true,
          "isMine": true,
          "isReported": true,
          "orderInfo": {
            "optNo": 0,
            "optTitle": "string22222",
            "orderNo": 0,
            "paymentId": 0,
            "prodNm": "string",
            "prodNo": 0,
            "totalAmount": 0
          },
          "regDate": "string",
          "reviewLikeCount": 0,
          "reviewSeq": 0,
          "thumbImage": {
            "attachSeq": 0,
            "width": 180,
            "height": 180,
            "reviewAttachfile": {
              "attachDir": "string",
              "attachHeight": 0,
              "attachName": "string",
              "attachSeq": 2204570,
              "attachSize": 0,
              "attachWidth": 0,
              "delYn": "string",
              "modifyDate": "string",
              "regDate": "string",
              "thumbMobileName": "string",
              "thumbMobilePixelCd": 0,
              "thumbMobileSize": 0,
              "thumbPcName": "string",
              "thumbPcPixelCd": 0,
              "thumbPcSize": 0
            },
            "thumbPixelCd": 0,
            "url": "http://img.wemep.co.kr/wmp-review/12/170418/a8/a80a90279c2ae00621751848375e83140b4d653a_pc.jpg",
          },
          "totalSatisfaction": 0,
          "totalSatisfactionPoint": 0,
          "userId": "qaqaqa******"
        }
      ],
      "paging": {
        "blockEnd": 1,
        "blockStart": 10,
        "limit": 10,
        "page": 1,
        "totalCount": 10,
        "totalPage": 1
      }
    },
    "satisfactionInfo": {
      "satisfaction": 0,
      "total": 0
    },
    "usePointSave": true,
    "useSnsShare": true
  }
}

var data_type = {
  "data": {
    "photoTotalCount": 0,
    "pointSaveInformation": {
      "guide": "<i></i>포토후기 등록 시 <em>100P</em> 적립, 일반후기 등록 시 <em>50P</em> 적립!"
    },
    "reviewList": {
      "list": [
        {
          "content": "배송 빠르고 맛있네요",
          "image": null,
          "isFavorited": false,
          "isMine": false,
          "isReported": false,
          "orderInfo": {
            "optNo": 0,
            "optTitle": "싱싱한 씨없는 네이블 오렌지 9kg",
            "orderNo": 1888886,
            "paymentId": 0,
            "prodNm": "01_네이블 오렌지 9kg(55과 전,후 중소과)",
            "prodNo": 0,
            "totalAmount": 0
          },
          "regDate": "2017.04.13 16:53",
          "reviewLikeCount": 0,
          "reviewSeq": 7486124,
          "thumbImage": null,
          "totalSatisfaction": 5,
          "totalSatisfactionPoint": 0,
          "userId": "qaqaqa******"
        },
        {
          "content": "배송 빠르고 맛있네요",
          "image": null,
          "isFavorited": false,
          "isMine": false,
          "isReported": false,
          "orderInfo": {
            "optNo": 0,
            "optTitle": "싱싱한 씨없는 네이블 오렌지 9kg",
            "orderNo": 1888886,
            "paymentId": 0,
            "prodNm": "01_네이블 오렌지 9kg(55과 전,후 중소과)",
            "prodNo": 0,
            "totalAmount": 0
          },
          "regDate": "2017.04.13 16:53",
          "reviewLikeCount": 0,
          "reviewSeq": 7486124,
          "thumbImage": null,
          "totalSatisfaction": 5,
          "totalSatisfactionPoint": 0,
          "userId": "qaqaqa******"
        }
      ],
      "paging": {
        "blockEnd": 1,
        "blockStart": 1,
        "limit": 10,
        "page": 1,
        "totalCount": 2,
        "totalPage": 1
      }
    },
    "satisfactionInfo": {
      "satisfaction": 0,
      "total": 0
    },
    "usePointSave": true,
    "useSnsShare": true
  }
}


var noData = {
  "data": {
    "photoTotalCount": 0,
    "pointSaveInformation": {
      "guide": "<i></i>포토후기 등록 시 <em>100P</em> 적립, 일반후기 등록 시 <em>50P</em> 적립!"
    },
    "reviewList": {
      "list": [],
      "paging": {
        "blockEnd": 0,
        "blockStart": 1,
        "limit": 10,
        "page": 1,
        "totalCount": 0,
        "totalPage": 0
      }
    },
    "satisfactionInfo": {
      "satisfaction": 5,
      "total": 0
    },
    "usePointSave": true,
    "useSnsShare": true
  }
}


app.get('/deal/:id/list', function(req, res, next) {
  var page = req.query.page;
  var sortcd = req.query.sortCd;
  var output = req.query.outputType;
  console.log('page', page);
  console.log('sortcd', sortcd);
  console.log('output', output);

  switch (req.params.id) {
    case '1':
      if (sortcd == 2) {
        res.json(data1_sort);
      } else {
        if (output == 2) {
          res.json(noData);
        } else {
          res.json(data_type);
        }
      }
    break;
    default:
      res.send('에러');
  }
});





app.listen(app.get('port'), function () {
  console.log('Node app running on port', app.get('port'));
});
