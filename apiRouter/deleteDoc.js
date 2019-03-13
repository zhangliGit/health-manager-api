const mongoose = require('../db');
const userModel = mongoose.model('Zhangli');

const deleteDoc = (params, callback) => {
  const query = {
    _id: params.id
  }
  userModel.remove(query, (err, res) => {
    callback({
      status: true,
      errMsg: 'ok'
    })
  })
}

module.exports = deleteDoc
