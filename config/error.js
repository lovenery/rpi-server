module.exports = function (app) {
    // catch 404
    app.use(function(req, res, next) {
        var err = new Error('404 Not Found')
        err.status = 404
        next(err)
    })

    if (process.env.NODE_ENV === 'production') {
        // production error handler
        // no stacktraces leaked to user
        app.use(function(err, req, res, next) {
            res.status(err.status || 500)
            let data = {
                message: err.message,
                error: {}
            }
            res.json(data)
            // res.render('error', data)
        })
    } else {
        // development error handler
        // will print stacktrace
        app.use(function(err, req, res, next) {
            res.status(err.status || 500)
            let data = {
                message: err.message,
                error: err
            }
            res.json(data)
            // res.render('error', data)
        })
    } 

    
}