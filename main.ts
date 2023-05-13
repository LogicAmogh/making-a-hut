let X = 0
let Y = 0
function Horizontal (a: number, b: number, Size: number, Side: number) {
    X = a
    Y = b
    for (let index = 0; index < Size; index++) {
        led.plot(X, Y)
        X += Side
        basic.pause(200)
    }
}
function Diagonal (a: number, b: number, Size: number, Side: number) {
    X = a
    Y = b
    for (let index = 0; index < Size; index++) {
        led.plot(X, Y)
        Y += -1 * Side
        X += Side
        basic.pause(200)
    }
}
function Vertical2 (a: number, b: number, Size: number, Side: number) {
    X = a
    Y = b
    for (let index = 0; index < Size; index++) {
        led.plot(X, Y)
        Y += Side
        basic.pause(200)
    }
}
function Vertical (a: number, b: number, Size: number, Side: number) {
    X = a
    Y = b
    for (let index = 0; index < Size; index++) {
        led.plot(X, Y)
        Y += Side
        basic.pause(200)
    }
}
