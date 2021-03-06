var express = require('express')
var router = express.Router()
const Light = require('../helpers/Light')
const Sensor = require('../helpers/Sensor')
const Move = require('../helpers/Move') ///

// router.post('/led', function(req, res){
//     let gpio = parseInt(req.body.gpio)
//     let led = parseInt(req.body.led, 10)
//     rpio.open(gpio, rpio.OUTPUT) ///
//     rpio.write(gpio, led) ///
//     res.json(req.body)
// })

router.post('/sonic', function(req, res) {
    Sensor.sonic(function (ds) {
        res.json(ds)
    })
})
router.post('/temperature', function(req, res) {
    Sensor.temperature(function (ds) {
        res.json(ds)
    })
})
router.post('/humidity', function(req, res) {
    Sensor.humidity(function (ds) {
        res.json(ds)
    })
})

router.post('/move', function(req, res) {
    let direction = req.body.direction
    process.env.direction = direction
    Move.start(direction) ///
    res.json(req.body)
})

router.post('/light', function(req, res) {
    if (process.env.LIGHT == 'off') {
        process.env.LIGHT = 'on'
        Light.on((r) => {
            res.json('off') // return the next state is off
        })
    } else {
        process.env.LIGHT = 'off'
        Light.off((r) => {
            res.json('on') // return the next state is on
        })
    }
})

module.exports = router
