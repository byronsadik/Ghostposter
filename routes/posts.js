var express = require('express'),
    router = express.Router(),
    rawjs = require('raw.js'),
    reddit = new rawjs("raw.js redditPoster"),
    util = require('util')
;


router.get('/', function(req, res){
    res.render('newpost', {title: 'NEW POST TO REDDIT'});
});



module.exports = router;