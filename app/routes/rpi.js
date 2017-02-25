var express = require('express');
var router = express.Router();
const rpio = require('rpio')
rpio.init({mapping: 'gpio'})

router.post('/led', function(req, res){
    let gpio = parseInt(req.body.gpio)
    let led = parseInt(req.body.led, 10)
    rpio.open(gpio, rpio.OUTPUT)
    rpio.write(gpio, led)
    res.json(req.body)
});

module.exports = router;