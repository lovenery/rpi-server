const redis = require('redis')

module.exports = function () {

    var client = redis.createClient()
    client.on('connect', function () {
        console.log('Connected to Redis...')
        client.set("distance", 1)
        client.set("temperature", 2)
    })
    client.on("error", function (err) {
        console.log("Redis Error..." + err)
    })
}