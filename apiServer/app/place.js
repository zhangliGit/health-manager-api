var express = require("express");
var bodyParser = require('body-parser');
var api = express.Router();
var Venue = require('../models/place');
var dbSql = require('../dbSql');
var url = require('url');

// 配置post提交json数据解析
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({
    extended: true
}))

// 查询数据
api.get("/placeList", (req, res) => {
    const params = url.parse(req.url, true).query;
    const name = new RegExp(params.name, 'i');
    dbSql.readDoc(Venue, {
      ...params,
      name
    },(docs) => {
        res.send(docs);
    })
})

// 新增数据
api.post("/addPlace", (req, res) => {
  dbSql.insertDoc(Venue, {
    ...req.body
  }, (docs) => {
        res.send(docs);
    })
})

// 删除数据

api.post("/delPlace", (req, res) => {
  const params = { id: { $in: req.body.id.split(',') } }
  dbSql.deleteDoc(Venue, params, (docs) => {
      res.send(docs);
  })
})

// 更新数据

api.post('/updatePlace', (req, res) => {
  const params = {
    id: req.body.id
  }
  const options = req.body;
  dbSql.updateDoc(Venue, params, options, (docs) => {
      res.send(docs);
  })
})
module.exports = api;