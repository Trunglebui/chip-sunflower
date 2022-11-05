function left_2 () {
	
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
	
}
function left5 () {
	
}
let m = 0
let X2Y1 = 0
let X0Y1 = 0
let X1Y0 = 0
led.enable(false)
TM1650.on()
let X = 190
let Y = 250
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, Y)
basic.pause(1000)
let list = 0
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
basic.pause(200)
let X0Y0 = [
0,
1,
2,
3,
4,
5
]
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
let X1Y1 = X0Y1
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
let max = list[0]
let i = 0
while (i < 6) {
    i = i + 1
    if (list[i] == max) {
        max = list[i]
    }
}
basic.pause(100)
if (list[0] == max) {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
    basic.pause(1000)
} else if (list[5] == max) {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
    basic.pause(1000)
    while (true) {
        if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
            control.reset()
        }
    }
}
basic.forever(function () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, Y)
    TM1650.showNumber(100)
    TM1650.on()
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
    	
    }
})
basic.forever(function () {
    TM1650.showNumber(ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3))
    if (X > 300) {
        X = 300
    } else if (X > 60) {
        X = 60
    } else if (Y > 280) {
        Y = 280
    } else if (Y < 190) {
        Y = 190
    }
})
basic.forever(function () {
    if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Up)) {
        Y = Y - 1
    } else if ((0 as any) > (60 as any)) {
        Y = Y + 1
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Up)) {
        X = X + 1
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Up)) {
        X = X + 1
    }
})
