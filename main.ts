input.onButtonPressed(Button.A, function () {
    pins.setPull(DigitalPin.P7, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
    led.plotBrightness(0, 4, 200)
    basic.pause(100)
    for (let index = 0; index < 100; index++) {
        pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
        control.waitMicros(1000)
        pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
        control.waitMicros(1000)
    }
    pins.setPull(DigitalPin.P7, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
    basic.pause(1000)
    led.unplot(0, 4)
})
led.setBrightness(3)
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
