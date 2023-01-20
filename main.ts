input.onButtonPressed(Button.A, function () {
    basic.showIcon(Checkmark)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(Mad)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(Smile)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(X)
})
input.onGesture(Gesture.Shake, function () {
    RPS = randint(1, 4)
    if (RPS == 1) {
        basic.showString("1")
    } else if (RPS == 2) {
        basic.showString("2")
    } else if (RPS == 3) {
        basic.showString("3")
    } else {
        basic.showString("4")
    }
})
let RPS = 0
let Checkmark = IconNames.Yes;
let X = IconNames.No;
let Smile = IconNames.Happy;
let Mad = IconNames.Angry;
