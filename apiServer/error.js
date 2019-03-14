var express = require("express");
var api = express.Router();
var MongoClient = require('../db');

api.get("/*", function(req, res) {
    res.send({
        "stauts": -1,
        "errMsg": "您访问的服务不存在"
    });
});

module.exports = api;