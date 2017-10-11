var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    var tag = req.query.tag;
    var blogIndex = {};
    if (tag) {
        for (let k in index) {
            var blog = index[k];
            if (blog.tag == tag) {
                blogIndex[k] = blog;
            }
        }
    } else {
        blogIndex = index;
    }
    res.render('index', { title: 'Insomnia-er', index: blogIndex });
});

/* GET users listing. */
router.get('/update', function(req, res, next) {
    var indexPath = path.join(__dirname, '../blogIndex.json')
    fs.readFile(indexPath, function(err, data) {
        global.index = JSON.parse(data.toString());
        res.redirect('/');
    })
});
module.exports = router;