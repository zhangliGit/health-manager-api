const mongoose = require('../db');
const userModel = mongoose.model('Zhangli');

const insertDoc = (params, callback) => {
  const user = new userModel({
    _id: Math.floor(Math.random() * 1000000),
    name:  params.name
  })
  user.save((err, res) => {
    callback({
      status: true,
      errMsg: 'ok'
    })
  })
}

module.exports = insertDoc
