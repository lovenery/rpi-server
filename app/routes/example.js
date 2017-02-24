var express = require('express');
var router = express.Router();
var Example = require('../models/Example');

router.get('/', function(req, res){
    Example.find({}, function (err, exp) {
        if (err) throw err
        res.json(exp);
    });
});

router.post('/', function(req, res){
    let exp = new Example(req.body);
    exp.save(function (err, data) {
        if (err) {
            res.json(err.message)
        }
        res.json(data);
    });
});

module.exports = router;