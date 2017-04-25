const rpio = require('rpio')

module.exports = {
    toggle,
    on,
    off
}

const pin = 3
rpio.open(pin, rpio.OUTPUT, rpio.LOW)

function toggle() {
  if (!process.env.light) {
      on()
      process.env.light = 1
  } else {
      off()
      process.env.light = 0
  }
}

function on() {
  rpio.write(pin, rpio.HIGH)
}

function off() {
  rpio.write(pin, rpio.LOW)
}