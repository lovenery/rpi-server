const jwt = require('jsonwebtoken')

module.exports = {
    create,
    getPayload,
    middleware
}

function create (user) {
    return new Promise(function (resolve, reject) {
        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email
        }
        let token = jwt.sign(payload, process.env.APP_KEY, {
            expiresIn: 86400 // seconds
        })

        return resolve(token);
    })
}

function getPayload (token) {
    return new Promise(function (resolve, reject) {
        let payload = jwt.verify(token, process.env.APP_KEY);
        return resolve(payload)
    })
}

function middleware (req, res, next) {
    let token = req.body.token || req.headers['token'];
    if (token) {
        jwt.verify(token, process.env.APP_KEY, function (err, decode) {
            if (err) {
                res.status(401).send("Invalid Token");
            } else {
                req.user = decode;
                next();
            }
        })
    } else {
        res.status(401).send("Unauthorized");
    }
}