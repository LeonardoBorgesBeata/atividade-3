input.onGesture(Gesture.Shake, function () {
    basic.showNumber(l)
    if (l == 10) {
        l = 0
    }
})
let l = 0
l = 0
basic.forever(function () {
    for (let index = 0; index < 100; index++) {
        for (let index = 0; index < 100; index++) {
            l += 1
        }
    }
})
