// var auth = require('./routes/auth');
// var example = require('./routes/example');
const rpi = require('./routes/rpi');

module.exports = function (app) {
    app.get('/', function(req, res){
        res.render('index', { userAgent: req.headers['user-agent'] })
    })
    app.post('/', function (req, res) {
        res.json(req.body)
    })
    app.use(rpi);
    // app.use('/auth', auth);    
    // app.use('/example', example);
}