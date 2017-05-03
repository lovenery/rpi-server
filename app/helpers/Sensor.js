// old cmd
const exec = require('child_process').exec
const path = require('path')
const cmd = path.resolve(__dirname, '../../bin/ultra_sonic.py')

function get(cb) {
    exec(cmd, function(err, stdout, stderr) {
        cb(stdout)        
    })
}

// new redis
const redis = require('redis')
const client = redis.createClient()

function sonic (cb) {
    client.get("distance", (err, reply) => {
        cb(reply)
    })
}
function temperature (cb) {
    client.get("temperature", (err, reply) => {
        cb(reply)
    })
}
function humidity (cb) {
    client.get("humidity", (err, reply) => {
        cb(reply)
    })
}

module.exports = {
    get,
    sonic,
    temperature
}

//exec(cmd, function(error, stdout, stderr) {
//  console.log(stdout);
//});
