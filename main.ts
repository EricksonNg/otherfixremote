control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showIcon(IconNames.House)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (!(input.buttonIsPressed(Button.B))) {
            basic.showIcon(IconNames.Tortoise)
        }
    }
})
