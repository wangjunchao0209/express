var express = require('express');
var router = express.Router();
const http = require('http');
/* GET users listing. */
router.post('/', function(req, res, next) {
    const options = {
        host: req.body.interName,
        port: req.body.port,
        path: req.body.path
    }
    const reqs = http.request(options);
    reqs.end();
    reqs.on('response', (info) => {
        info.on('data', function (chunk) {
            res.send(chunk.toString());
        })
    });
});
module.exports = router;
