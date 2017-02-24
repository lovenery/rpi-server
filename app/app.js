// var auth = require('./routes/auth');
// var example = require('./routes/example');
const rpio = require('rpio')
rpio.init({mapping: 'gpio'})

module.exports = function (app) {
    app.get('/', function(req, res){
        res.render('index', { userAgent: req.headers['user-agent'] })
    })
    app.post('/', function (req, res) {
        res.json(req.body)
    })
    app.post('/led', function (req, res) {
        let gpio = parseInt(req.body.gpio)
        let led = parseInt(req.body.led, 10)
        rpio.open(gpio, rpio.OUTPUT)
        rpio.write(gpio, led)
        res.json(req.body)
    })

    // app.use('/auth', auth);    
    // app.use('/example', example);
}