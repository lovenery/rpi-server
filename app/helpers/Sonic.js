const exec = require('child_process').exec
const path = require('path')
const cmd = path.resolve(__dirname, '../../bin/ultra_sonic.py')

function get(cb) {
    exec(cmd, function(err, stdout, stderr) {
        cb(stdout)        
    })
}


module.exports = {
    get
}

//exec(cmd, function(error, stdout, stderr) {
//  console.log(stdout);
//});
