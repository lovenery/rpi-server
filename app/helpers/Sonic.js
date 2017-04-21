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

function rget (cb) {
    client.get("distance", (err, reply) => {
        cb(reply)
    })
}

module.exports = {
    get,
    rget
}

//exec(cmd, function(error, stdout, stderr) {
//  console.log(stdout);
//});
