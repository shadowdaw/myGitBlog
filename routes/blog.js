var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var marked = require('marked');

/* GET users listing. */
router.get('/*', function(req, res, next) {
    var filename = path.join(__dirname, '../blogs' + req.url); 
    fs.readFile(filename + '.md', function(err, data) {
        var html = marked(data.toString());
        var blog=index[req.url.substr(1)];
        res.render('blog', {"title":blog.title,blog:blog,mdContent: html });
    })
});

module.exports = router;