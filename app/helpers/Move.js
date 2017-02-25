const rpio = require('rpio')
module.exports = {
    forward,
    backward,
    trunleft,
    trunright
}

const lpin1 = 16;
const lpin2 = 18;
const rpin1 = 11;
const rpin2 = 13;

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
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.HIGH);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(sleepTime);
    stop()
}
function backword() {
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