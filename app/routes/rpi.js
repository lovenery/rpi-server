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
    // let direction = req.body.direction
    // switch (direction) {
    //     case "f":
    //         Move.forward()
    //         break;
    //     case "b":
    //         Move.backward()
    //     default:
    //         break;
    // }
    const pin1 = 23;
    const pin2 = 24;
    rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
    rpio.open(pin2, rpio.OUTPUT, rpio.LOW);

    rpio.write(pin1, rpio.HIGH);
    rpio.sleep(1);
    rpio.write(pin1, rpio.LOW);

    rpio.msleep(1000);

    res.json(req.body)
});

module.exports = router