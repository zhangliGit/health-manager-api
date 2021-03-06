const globalCon = require('../config');
const mongoose = require('mongoose');
const assert = require('assert');

var url = globalCon.dbHost;

/**
 * 连接数据库
 */
mongoose.connect(url);

/**
 * 连接成功
 */
mongoose.connection.on('connected', () => {
  console.log('连接成功');
})
/**
 * 连接异常
 */
mongoose.connection.on('error', () => {
  console.log('连接异常');
})
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {
  console.log('连接断开');
})
