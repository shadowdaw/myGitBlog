const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const indexPath = path.join(__dirname, '../blogIndex.json')
const gm = require('../utils/globalmethod');  

/* GET home page. */
router.get('/', function(req, res, next) {
    let tag = req.query.tag;
    let blogIndex = {};
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
    res.render('index', { title: 'Insomnia-er', index: blogIndex, tags: global.tags });
});

/* GET users listing. */
router.get('/update', function(req, res, next) {
    fs.readFile(indexPath, function(err, data) {
        global.index = JSON.parse(data.toString()); 
        global.tags=gm.createTagsByIndex(global.index);
        res.redirect('/');
    })
});
module.exports = router;