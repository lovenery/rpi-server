const rpio = require('rpio')

module.exports = {
    toggle,
    on,
    off
}

const pin = 3
rpio.open(pin, rpio.OUTPUT, rpio.LOW)

function toggle() {
  if (!process.env.LIGHT) {
      on()
      process.env.LIGHT = 1
  } else {
      off()
      process.env.LIGHT = 0
  }
}

function on() {
  rpio.write(pin, rpio.HIGH)
}

function off() {
  rpio.write(pin, rpio.LOW)
}