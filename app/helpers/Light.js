const exec = require('child_process').exec
const path = require('path')
const onLight = path.resolve(__dirname, '../../bin/on_light.py')
const offLight = path.resolve(__dirname, '../../bin/off_light.py')

module.exports = {
    on,
    off
}

function on(cb) {
  exec(onLight, function(err, stdout, stderr) {
    cb(stdout)
  })
}

function off(cb) {
  exec(offLight, function(err, stdout, stderr) {
    cb(stdout)
  })
}