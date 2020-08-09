basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
