var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var category = req.query.category;
    res.render('index', { title: 'Insomnia-er', index: index });
});

module.exports = router;