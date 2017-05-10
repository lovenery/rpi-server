#!/usr/bin/python
import time
import RPi.GPIO as GPIO

lpin1 = 35
lpin2 = 37
rpin1 = 38
rpin2 = 40

GPIO.setmode(GPIO.BOARD)
GPIO.setup(lpin1, GPIO.OUT)
# GPIO.setup(lpin2, GPIO.OUT)
GPIO.setup(rpin1, GPIO.OUT)
# GPIO.setup(rpin2, GPIO.OUT)

try:
    GPIO.output(lpin1, True)
    GPIO.output(rpin1, True)
    time.sleep(0.5)
    GPIO.output(lpin1, False)
    GPIO.output(rpin1, False)
    time.sleep(0.1)

finally:
    GPIO.cleanup()
