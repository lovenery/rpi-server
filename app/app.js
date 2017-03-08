const rpi = require('./routes/rpi');

module.exports = function (app) {
    app.get('/', function(req, res){
        // let s = process.env.STREAM
        let s = `http://${require('os').networkInterfaces().wlan0[0].address}:8087`
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