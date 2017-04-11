const rpi = require('./routes/rpi');
const net = require('os').networkInterfaces()

module.exports = function (app) {
    app.get('/', function(req, res) {
        // let s = process.env.STREAM
        // let s = `http://${net.wlan0[0].address}:8087`
        let s = process.env.STREAM
        if (typeof net.wlan0 != 'undefined') {
            s = `http://${net.wlan0[0].address}:8087`
        }
        res.render('index', {
            userAgent: req.headers['user-agent'],
            stream: s
        })
    })
    app.post('/', function (req, res) {
        res.json(req.body)
    })
    app.use(rpi);
}