let Time = 0
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    Time = 37
    for (let index = 0; index < 37; index++) {
        music.play(music.stringPlayable("C5 - A - B - - C5 ", 450), music.PlaybackMode.UntilDone)
        basic.showNumber(Time)
        Time = Time - 1
        basic.pause(1000)
    }
    music.setVolume(255)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.play(music.stringPlayable("C C C E D G E D ", 12), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    Time = 37
    for (let index = 0; index < 37; index++) {
        music.play(music.stringPlayable("C5 - A - B - - C5 ", 450), music.PlaybackMode.UntilDone)
        basic.showNumber(Time)
        Time = Time - 1
        basic.pause(1000)
    }
    music.setVolume(255)
    basic.showIcon(IconNames.Yes)
    music.play(music.stringPlayable("C F B C A E C C5 ", 323), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
