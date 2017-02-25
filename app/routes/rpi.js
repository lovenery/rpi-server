var express = require('express')
var router = express.Router()
const rpio = require('rpio')
rpio.init({mapping: 'gpio'})
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
            res.json("success")
            break;
        case "b":
            Move.backward()
            res.json("success")
        default:
            res.json("fail")
            break;
    }
});

module.exports = router