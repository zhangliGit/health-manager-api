const mongoose = require('../db');
const userModel = mongoose.model('Zhangli');

const updateDoc = (params, callback) => {
  userModel.update({_id: params.id}, {$set: {...params}}, {multi: true}, (err, docs) => {
    callback({
      status: true,
      errMsg: 'ok'
    })
  })
}

module.exports = updateDoc
