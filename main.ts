radio.setGroup(64)
basic.forever(function () {
    if (input.lightLevel() > 10) {
        radio.sendNumber(1)
    }
    basic.pause(5000)
})
