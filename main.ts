function biratu_eskuinera () {
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    }
}
function biratu_eskerrera () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    }
}
function biratu_goira () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.North)
    }
}
function biratu_behera () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.South)
    }
}
basic.forever(function () {
    biratu_eskerrera()
    biratu_eskuinera()
    biratu_goira()
    biratu_behera()
})
