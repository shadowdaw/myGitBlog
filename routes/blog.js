var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var marked = require('marked'); 

marked.setOptions({
  highlight: function (code) {
    return require("highlight").Highlight(code);
  }
});


/* GET users listing. */
router.get('/*', function(req, res, next) {
    var filename = path.join(__dirname, '../blogs' + req.url) + '.md';
    var blog = index[req.url.substr(1)];
    if (!blog) {
        return res.render('error', { "title": '错误', message: '文章不存在!' })
    }
    fs.exists(filename, (exists) => {
        if (exists) {
            fs.readFile(filename, function(err, data) {
                if (err) {
                    res.render('error', { "title": '错误', message: '文章不存在!' })
                    return;
                }
                var html = marked(data.toString());
                res.render('blog', { "title": blog.title, blog: blog, mdContent: html });
            })
        } else {
            res.render('error', { "title": '错误', message: '文章不存在!' });
        }
    });
});

module.exports = router;