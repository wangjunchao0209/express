var express = require('express');
var router = express.Router();
let bookDaoFn = require('../dao/bookDao')

/* GET users listing. */
router.get('/', function(req, res) {
    bookDaoFn.deleteMusic(req.body.id, function (err, res) {
        if (!err) {
            res.send(res);
        }
    })
});
module.exports = router;
