const mongoose = require('mongoose');

/**
 * 定义Scheme模板
 */
const VenueScheme = new mongoose.Schema({
  name: { type: String },   // 场馆名称
  des: { type: String },  // 场馆描述
  pic: { type: String },  // 场馆图片
  status: { type: Boolean },  // 场馆状态
  createTime: { type: Date }, // 创建时间
  updateTime: { type: Date }, // 更新时间
})
/**
 * 将Scheme发布为model
 */
const Venue = mongoose.model('Venue', VenueScheme, 'venue');

module.exports = Venue;
