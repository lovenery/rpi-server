// var auth = require('./routes/auth');
// var example = require('./routes/example');

module.exports = function (app) {
    app.get('/', function(req, res){
        res.render('example', { userAgent: req.headers['user-agent'] })
    })
    app.post('/', function (req, res) {
        res.json(req.body);
    });

    // app.use('/auth', auth);    
    // app.use('/example', example);
}