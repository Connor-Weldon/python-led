function christmas() {
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
    `)
}

function mary() {
    basic.showLeds(`
        . . . . .
                # # # . .
                # . . . .
                # . . . .
                . . . . .
    `)
}

function dave() {
    basic.showLeds(`
        . . . . .
                . # . # #
                . . . . .
                . . . . .
                . . . . .
    `)
}

function bob() {
    basic.showLeds(`
        . . . . .
                # . . . .
                # . . . .
                . . . . .
                . . . . .
    `)
}

function janet() {
    basic.showLeds(`
        . . . . .
                . . . . .
                # . # . .
                . . . # #
                . . . . .
    `)
}

basic.showLeds(`
    . . . . .
        # . . # #
        . # # . .
        . . . . .
        . . . . .
`)
basic.forever(function on_forever() {
    bob()
    basic.pause(500)
    mary()
    basic.pause(500)
    dave()
    basic.pause(500)
    janet()
    basic.pause(500)
    christmas()
    basic.pause(500)
})
