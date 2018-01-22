const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const indexPath = path.join(__dirname, '../blogIndex.json')
const gm = require('../utils/globalmethod');
var sign = require('../utils/sign.js');

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
        global.tags = gm.createTagsByIndex(global.index);
        res.redirect('/');
    })
});


router.get('/wxconfig', function(req, res, next) {
    let url = req.query.url;
    let config = sign('jsapi_ticket', url);
    res.json({
        code: 0,
        data: {
            nonceStr: config.nonceStr,
            timestamp: config.timestamp,
            appId: 'wxfccb21e6823e1443',
            signature: config.signature
        }
    }) 
});
module.exports = router;