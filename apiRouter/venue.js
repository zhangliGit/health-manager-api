var express = require("express");
var api = express.Router();
var readDoc = require('./readDoc');
var insertDoc = require('./insertDoc');
var deleteDoc = require('./deleteDoc');
var updateDoc = require('./updateDoc');
var url = require('url')

// 查询数据
api.get("/read", (req, res) => {
    const params = url.parse(req.url, true).query;
    readDoc(params, (docs) => {
        res.send(docs);
    })
});

// 新增数据
api.get("/add", (req, res) => {
    const params = url.parse(req.url, true).query;
    insertDoc(params, (docs) => {
        res.send(docs);
    })
});

// 删除数据

api.get("/del", (req, res) => {
    const params = url.parse(req.url, true).query;
    deleteDoc(params, (docs) => {
        res.send(docs);
    })
})

// 更新数据

api.get('/update', (req, res) => {
    const params = url.parse(req.url, true).query;
    updateDoc(params, (docs) => {
        res.send(docs);
    })
})
module.exports = api;