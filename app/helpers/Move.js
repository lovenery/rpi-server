const rpio = require('rpio')
const Sensor = require('./Sensor')

module.exports = {
    forward,
    backward,
    trunleft,
    trunright,
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
    resume()
}

const sleepTime = 500
function forward() {
    rpio.write(lpin1, rpio.HIGH);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.HIGH);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(sleepTime);
    stop()
}
function backward() {
    rpio.write(lpin1, rpio.LOW);
    rpio.write(lpin2, rpio.HIGH);
    rpio.write(rpin1, rpio.LOW);
    rpio.write(rpin2, rpio.HIGH);
    rpio.msleep(sleepTime);
    stop()
}
function trunleft() {
    rpio.write(lpin1, rpio.LOW);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.HIGH);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(sleepTime);
    stop()
}
function trunright() {
    rpio.write(lpin1, rpio.HIGH);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.LOW);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(sleepTime);
    stop()
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
            trunleft()
            break
        case "r":
            trunright()
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
