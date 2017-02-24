const request = require('request')
const User = require('../models/User')

module.exports = {
    facebook,
    createOrRetrieveUser
}

/**
 * Facebook auth using Graph API
 * @param  {String}
 * @return {Object}
 */
function facebook(accessToken) {
    return new Promise(function (resolve, reject) {
        const fields = ['id', 'name', 'email', 'gender', 'verified']
        const graphApiRoot = 'https://graph.facebook.com/v2.8'
        const graphApiUrl = `${graphApiRoot}/me?fields=${fields.join(',')}&access_token=${accessToken}`

        request.get({url: graphApiUrl, json: true}, (err, response, body) => {
            if (err) {
                return reject(err)
            }
            if(response.statusCode !== 200) {
                return reject('authorization error')
            }
            if (!body.email) {
                return reject('email undefined')
            }
            resolve({ type: 'facebook', user: body })
        })
    })
}

/**
 * Create or Retrive User from Database
 * @param  {Object} { type: 'facebook', user: {...} }
 * @return {Object} { user: {...} }
 */
function createOrRetrieveUser(data) {
    return new Promise(function (resolve, reject) {
        // ex: { 'facebook.id': '1234567891234567' }
        const query = {
            [`${data.type}.id`]: data.user.id
        }

        User.findOne(query, (err, user) => {
            if(err) return reject('Error fetching user')

            // User found, return him to the callback
            if(user) return resolve(user)

            // Create User
            let newUser = new User()
            newUser.username = data.user.name
            newUser.email = data.user.email
            newUser.facebook = data.user
            newUser.save(function (err, data) {
                if (err) return reject('Error creating user')

                return resolve(data)
            })
        })
    })
}