const mongoose = require('mongoose')
const http = require('http')
require('../model/model')
const app = require('../app')

let server = http.createServer(app)

mongoose.connect('mongodb://39.99.185.70:27017/testProp', {useMongoClient: true}, function (err) {
    if (!err) {
        console.log('数据库连接正常')
        server.listen(3000)
    }
})

server.on('close', function () {
    mongoose.disconnect()
})