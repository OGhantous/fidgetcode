input.onButtonPressed(Button.A, function () {
    basic.showIcon(Checkmark)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(Smile)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(X)
})
input.onGesture(Gesture.Shake, function () {
	
})
let Checkmark = IconNames.Yes;
let X = IconNames.No;
let Smile = IconNames.Happy;
