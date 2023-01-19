input.onButtonPressed(Button.A, function () {
    basic.showIcon(Checkmark)
})
input.onSound(DetectedSound.Loud, function () {
    music.setVolume(255)
    music.playTone(698, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(Smile)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(X)
})
input.onSound(DetectedSound.Quiet, function () {
    music.setBuiltInSpeakerEnabled(false)
})
let Checkmark = IconNames.Yes;
let X = IconNames.No;
let Smile = IconNames.Happy;
