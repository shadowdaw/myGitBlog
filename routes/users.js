var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/update', function(req, res, next) {
	var indexPath=path.join(__dirname, '../blogIndex.json')
    fs.readFile(indexPath, function(err, data) { 
    	console.log(err);
        global.index = JSON.parse(data.toString());
        res.json(global.index);
    })
});

module.exports = router;