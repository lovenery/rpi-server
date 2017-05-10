const rpio = require('rpio')
// const exec = require('child_process').exec
// const path = require('path')
// const Forward = path.resolve(__dirname, '../../bin/move_forward.py')
// const Backward = path.resolve(__dirname, '../../bin/move_backward.py')
const Sensor = require('./Sensor')

module.exports = {
    forward,
    backward,
    turnLeft,
    turnRight,
    start
}

const lpin1 = 35;
const lpin2 = 37;
const rpin1 = 38;
const rpin2 = 40;
rpio.open(lpin1, rpio.OUTPUT, rpio.LOW);
rpio.open(lpin2, rpio.OUTPUT, rpio.LOW);
rpio.open(rpin1, rpio.OUTPUT, rpio.LOW);
rpio.open(rpin2, rpio.OUTPUT, rpio.LOW);

function stop() {
    rpio.write(lpin1, rpio.LOW);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.LOW);
    rpio.write(rpin2, rpio.LOW);
}

const sleepTime = 500
function forward() {
    rpio.write(lpin1, rpio.HIGH);
    rpio.write(rpin1, rpio.HIGH);
    rpio.msleep(sleepTime);
    rpio.write(lpin1, rpio.LOW);
    rpio.write(rpin1, rpio.LOW);
    resume()
    // exec(Forward, function (err, stdout, stderr) {
    //     resume()
    // })
}
function backward() {
    rpio.write(lpin2, rpio.HIGH);
    rpio.write(rpin2, rpio.HIGH);
    rpio.msleep(sleepTime);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin2, rpio.LOW);
    resume()
}
function turnLeft() {
    rpio.write(rpin1, rpio.HIGH);
    rpio.msleep(sleepTime);
    rpio.write(rpin1, rpio.LOW);
    resume()
}
function turnRight() {
    rpio.write(lpin1, rpio.HIGH);
    rpio.msleep(sleepTime);
    rpio.write(lpin1, rpio.LOW);
    resume()
}

function start() {
    switch (process.env.direction) {
        case "f":
            forward()
            break
        case "b":
            backward()
            break
        case "l":
            turnLeft()
            break
        case "r":
            turnRight()
        case "s":
            stop()
        default:
            break
    }
}

function resume() {
    if (process.env.direction == 'f') {
        Sensor.sonic(function (ds) {
            if (ds > 30) {
                start()
            }
        })
    }
}
