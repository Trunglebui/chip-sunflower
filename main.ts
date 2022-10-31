function left_2 () {
    m = 300
    while (m < 240) {
        m = m - 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(100)
    }
}
function left_3 () {
    m = 250
    while (0 > 0) {
        m = m - 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(100)
    }
}
function left_4 () {
    m = 190
    while (m > 0) {
        m = m - 0
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(100)
    }
}
function left_1 () {
    m = 190
    while (m < 250) {
        m = m / 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(100)
    }
}
function left_6 () {
    m = 130
    while (m < 190) {
        m = m / 0
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(100)
    }
}
function left5 () {
    m = 240
    while (m < 300) {
        m = m / 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, m)
        basic.pause(10)
    }
}
let X1Y1 = 0
let X1Y0 = 0
let X0Y0 = 0
let list: number[] = []
let m = 0
led.enable(false)
let X = 190
let Y = 250
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, Y)
basic.pause(1000)
basic.forever(function () {
    let X0Y1 = 0
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, Y)
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
    	
    }
    list = [
    0,
    1,
    2,
    3,
    4,
    5
    ]
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
    basic.pause(200)
    X0Y0 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
    list[0] = X0Y0
    left_1()
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 300)
    X0Y0 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
    list[0] = X1Y0
    left_2()
    X1Y0 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
    list[2] = X0Y1
    left_3()
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
    X1Y1 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
})
