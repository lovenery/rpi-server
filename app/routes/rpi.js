var express = require('express')
var router = express.Router()
const rpio = require('rpio')
const Move = require('../helpers/Move')

router.post('/led', function(req, res){
    let gpio = parseInt(req.body.gpio)
    let led = parseInt(req.body.led, 10)
    rpio.open(gpio, rpio.OUTPUT)
    rpio.write(gpio, led)
    res.json(req.body)
})

router.post('/move', function(req, res){
    let direction = req.body.direction
    switch (direction) {
        case "f":
            Move.forward()
            break;
        case "b":
            Move.backward()
        case "l":
            Move.trunleft()
            break;
        case "r":
            Move.trunright()
        default:
            break;
    }
    res.json(req.body)
});

module.exports = router