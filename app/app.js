const rpi = require('./routes/rpi');

module.exports = function (app) {
    app.get('/', function(req, res){
        res.render('index', { 
            userAgent: req.headers['user-agent'],
            // stream: process.env.STREAM
            stream: `${require('os').networkInterfaces().wlan0[0].address}:8087`
        })
    })
    app.post('/', function (req, res) {
        res.json(req.body)
    })
    app.use(rpi);
}