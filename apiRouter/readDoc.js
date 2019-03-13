const mongoose = require('../db');
const userModel = mongoose.model('Zhangli');

const readDoc = (params, callback) => {
  const query = new RegExp(params.name, 'i');
  // 模糊查询
  userModel.find({$or: [{"name": query}]}).exec((err, docs) => {
    callback(docs)
  })
}

module.exports = readDoc
