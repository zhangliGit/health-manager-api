/**
 * @description 公共查询方法
 * @param model 操作数据库模型
 * @param params 查询参数
 */

const readDoc = (model, params, callback) => {
  const num = (params.page - 1) * (params.pageSize);
  model.find({$or: [{name: params.name}]}).skip(num).limit(params.pageSize).exec((err, res) => {
    resData(err, res, callback);
  })
}

/**
 * @description 公共删除方法
 * @param model 操作数据库模型
 * @param params 查询参数
 */
const deleteDoc = (model, params, callback) => {
  model.remove(params, (err, res) => {
    resData(err, 'ok', callback);
  })
}

/**
 * @description 公共更新方法
 * @param model 操作数据库模型
 * @param params 更新项id
 * @options 更新字段
 */
const updateDoc = (model, params, options, callback) => {
  model.update(params, {$set: {...options}}, {multi: true}, (err, res) => {
    resData(err, 'ok', callback);
  })
}

/**
 * @description 公共新增方法
 * @param model 操作数据库模型
 * @param params 新增字段参数
 * @options 更新字段
 */
const insertDoc = (model, params, callback) => {
  console.log(params);
  const docs = new model({
    ...params
  })
  docs.save((err, res) => {
    resData(err, res, callback);
  })
}

/**
 * @description 操作后统一处理
 */
const resData = (err, res, callback) => {
  if (err) {
    callback({
      "status": -1,
      "errMsg": "接口处理错误"
    })
  } else {
    callback({
      "status": 0,
      "data": res,
      "errMsg": ""
    })
  }
}

module.exports = {
  readDoc,
  deleteDoc,
  updateDoc,
  insertDoc
}