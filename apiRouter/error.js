var express = require("express");
var api = express.Router();
var MongoClient = require('../db');

api.get("/*", function(req, res) {
    res.send("接口不存在");
});

module.exports = api;