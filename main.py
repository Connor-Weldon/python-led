def christmas():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
    """)
def mary():
    basic.show_leds("""
        . . . . .
                # # # . .
                # . . . .
                # . . . .
                . . . . .
    """)
def dave():
    basic.show_leds("""
        . . . . .
                . # . # #
                . . . . .
                . . . . .
                . . . . .
    """)
def bob():
    basic.show_leds("""
        . . . . .
                # . . . .
                # . . . .
                . . . . .
                . . . . .
    """)
def janet():
    basic.show_leds("""
        . . . . .
                . . . . .
                # . # . .
                . . . # #
                . . . . .
    """)
basic.show_leds("""
    . . . . .
        # . . # #
        . # # . .
        . . . . .
        . . . . .
""")

def on_forever():
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
basic.forever(on_forever)
