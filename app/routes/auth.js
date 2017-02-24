const express = require('express')
const router = express.Router()
const Auth = require('../helpers/Auth')
const Token = require('../helpers/Token')

// router.get('/test/token', function(req, res){
//     require('../models/User').findOne({}, (err, user) => {
//         Token.create(user).then(function (dd) {
//             res.json(dd)
//         }).catch(function (err) {
//             res.json(err)
//         })
//     })
// })

router.post('/facebook', function (req, res) {
    let accessToken = req.headers['authorization']
    Auth.facebook(accessToken).then(function (fb_data) {
        // res.json(fb_data)
        return Auth.createOrRetrieveUser(fb_data)
    }).then(function (db_user) {
        return Token.create(db_user)
    }).then(function (jwt_token) {
        res.json(jwt_token)
    }).catch(function (err) {
        res.status(401).json('It\'s an error! '+ err)
    })
})

router.post('/user', Token.middleware, function(req, res){
    res.json(req.user)
})

module.exports = router