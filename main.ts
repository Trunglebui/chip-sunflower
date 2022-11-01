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
let i = 0
let max = 0
let X2Y1 = 0
let X1Y1 = 0
let X1Y0 = 0
let X0Y0 = 0
let list: number[] = []
let m = 0
led.enable(false)
TM1650.on()
let X = 190
let Y = 250
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, Y)
basic.pause(1000)
basic.forever(function () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, Y)
    TM1650.showNumber(100)
    TM1650.on()
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
        let X0Y1 = 0
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
        X1Y1 = X0Y1
        list[3] = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        left_4()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
        X2Y1 = X2Y1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
        left5()
        X2Y1 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        list[5] = X0Y1
        left_6()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        max = list[0]
        i = 0
        while (i < 6) {
            i = i + 1
        }
    }
    if (list[1] == max) {
    	
    } else if (false) {
    	
    }
})
