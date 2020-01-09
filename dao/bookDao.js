const mongoose = require('mongoose')

let musicModel = mongoose.model('albums')

function addMusic (music, callBack) {
    musicModel.create(music, function (err, datas) {
        if (!err) callBack(null, datas.toObject())
            else callBack(err)
    })
}

function findAllMusic (callBack) {
    musicModel.find({}).exec(function (err, datas) {
        if (!err) callBack(datas)
        else callBack(err)
    })
}

function deleteMusic (id, callBack) {
    musicModel.findByIdAndDelete(id, function (err, datas) {
        if (!err) callBack({})
    })
}

module.exports = {
    addMusic,
    findAllMusic,
    deleteMusic
}