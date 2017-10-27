var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var marked = require('marked'); 
var Highlight=require("highlight");

Highlight.init(function () {}, ['xml','css','javascript']);
marked.setOptions({
  highlight: function (code) {
    return Highlight.highlight(code);
  }
});


/* GET users listing. */
router.get('/*', function(req, res, next) { 
    var blogName=req._parsedUrl.pathname; 
    var filename = path.join(__dirname, '../blogs' + blogName) + '.md';
    var blog = index[blogName.substr(1)];
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