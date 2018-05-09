var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

router.post('/signup', function(req,res,next){
    User.create(req.body, function(err,data){
        if(err) return next(err);
        console.log(data);
        res.json(data);
    });
});

module.exports = router;