// require 需要的js
const mongoose = require('mongoose')
require('../model/model')
let musicDaoFn = require('../dao/bookDao')
const assert = require('assert')
// 一个测试套件 (文字说明， )
describe('测试bookDao', function () {
    // 钩子
    before (function () {
        mongoose.connect('mongodb://39.99.185.70:27017/testProp', {useMongoClient: true}, function (err, datas) {
            if (!err) {
                console.log('数据库连接正常')
            }
        })
    })
    after (function () {
        mongoose.disconnect()
    })
    // 一个或多个测试用例 （文字说明）
    it('测试添加一本书', function (done) {
        let book = {name: '一千零一夜', price: 1000}
        musicDaoFn.addMusic(book, function (err, res) {
            console.log(res, 8)
            done()
        })
    })

    it('测试删除', function () {
        let id = 123
        musicDaoFn.deleteMusic(id, function (err, res) {
            console.log(res,9)
            done()
        })
    })

    it('测试查找', function (done) {
        musicDaoFn.findAllMusic(function (err, res) {
            console.log(res,9)
            done()
        })
    })
})