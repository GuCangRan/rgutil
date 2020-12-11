import * as fun from '../utils/datetime'

//格式化日期
test('dateFormat', () => {
    //expect(fun.dateFormat("yyyy-MM-dd HH:mm:fff")).toEqual("2020-12-09 21:21:809")
    expect(fun.dateFormat("yyyy-MM-dd HH:mm:fff", new Date(2020, 10, 1, 10, 10, 10))).toEqual("2020-11-01 10:10:000")

})


//日期之差天数
test('daysDiff', () => {
    expect(fun.daysDiff(new Date("2020-09-18"), new Date("2021-01-18"))).toEqual(122)

})


//日期之差月数
test('monthDiff', () => {
    expect(fun.monthDiff(new Date("2020-09-18"), new Date("2021-01-18"))).toEqual(4)

})


//日期一年中哪一天
test('dayOfYear', () => {
    expect(fun.dayOfYear(new Date("2020-09-16"))).toEqual(260)

})


//某年某月的天数
test('daysInMonth', () => {
    expect(fun.daysInMonth(2020, 9)).toEqual(30)

})


//英语-指定日期的周几
test('weekDayEnglish', () => {
    expect(fun.weekDayEnglish(new Date(2020, 11, 9))).toEqual("Wednesday")

})


//汉语-指定日期的周几
test('weekDayChinese', () => {
    expect(fun.weekDayChinese(new Date(2020, 11, 9))).toEqual("周三")

})


//英语-指定日期的几月
test('monthNameEnglish', () => {
    expect(fun.monthNameEnglish(new Date(2020, 11, 9))).toEqual("December")
    expect(fun.monthNameEnglish(new Date(2020, 11, 9), true)).toEqual("Dec")

})


//汉语-指定日期的几月
test('monthNameChinese', () => {
    expect(fun.monthNameChinese(new Date(2020, 11, 9))).toEqual("12月")

    expect(fun.monthNameChinese(new Date(2020, 11, 9), false)).toEqual("十二月")

})