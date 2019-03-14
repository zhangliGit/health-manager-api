
const mongoose = require('mongoose');

// 创建场地模型
const placeSchema = new mongoose.Schema({
  vId: { type: Object }, // 场馆id
  name: { type: String }, // 场地类型
  total: { type: Number }, // 此类型场地总数
  day: { type: Array }, // 开放天数
  time: { type: Array }, // 开放时间段
  use: { type: Number }, // 可用数
})

const Place = mongoose.model('Place', placeSchema, 'place');

module.exports = Place;