var express = require('express')
var router = express.Router()
const rpio = require('rpio') ///
const Move = require('../helpers/Move') ///
const Sonic = require('../helpers/Sonic')

// router.post('/led', function(req, res){
//     let gpio = parseInt(req.body.gpio)
//     let led = parseInt(req.body.led, 10)
//     rpio.open(gpio, rpio.OUTPUT) ///
//     rpio.write(gpio, led) ///
//     res.json(req.body)
// })

router.post('/sonic', function(req, res) {
    Sonic.rget(function (ds) {
        res.json(ds)
    })
})

router.post('/move', function(req, res) {
    let direction = req.body.direction
    process.env.direction = direction
    Move.start(direction) ///
    res.json(req.body)
})

module.exports = router
