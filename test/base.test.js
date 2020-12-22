import * as fun from '../utils/base'

//判断数据类型
test('is', () => {
    expect(fun.is(ArrayBuffer, new ArrayBuffer())).toEqual(true)

    expect(fun.is(Array, [1])).toEqual(true)

    expect(fun.is(Map, new Map())).toEqual(true)

    expect(fun.is(Set, new Set())).toEqual(true)

    expect(fun.is(WeakMap, new WeakMap())).toEqual(true)

    expect(fun.is(WeakSet, new WeakSet())).toEqual(true)

    expect(fun.is(String, "")).toEqual(true)

    expect(fun.is(Number, 1)).toEqual(true)

    expect(fun.is(Number, new Number(1))).toEqual(true)

    expect(fun.is(Boolean, true)).toEqual(true)

    expect(fun.is(Boolean, new Boolean(true))).toEqual(true)

})


//是否null或undefined
test('isNil', () => {
    expect(fun.isNil(8)).toEqual(false)

})


//是否为null
test('isNull', () => {
    expect(fun.isNull(8)).toEqual(false)

})


//是否数值类型
test('isNumber', () => {
    expect(fun.isNumber(8)).toEqual(true)

    expect(fun.isNumber(NaN)).toEqual(false)

})


//是否数组类型
test('isArray', () => {
    expect(fun.isArray([8])).toEqual(true)

    expect(fun.isArray({
        "A": "test"
    })).toEqual(false)

})


//是否正整数
test('isPositiveNum', () => {
    expect(fun.isPositiveNum(8)).toEqual(true)

    expect(fun.isPositiveNum(1.8)).toEqual(false)

    expect(fun.isPositiveNum(-1)).toEqual(false)

})


//是否负整数
test('isNegativeNum', () => {
    expect(fun.isNegativeNum(8)).toEqual(false)

    expect(fun.isNegativeNum(1.8)).toEqual(false)

    expect(fun.isNegativeNum(-1)).toEqual(true)

})


//是否整数
test('isInteger', () => {
    expect(fun.isInteger(8)).toEqual(true)

    expect(fun.isInteger(1.8)).toEqual(false)

    expect(fun.isInteger(-2)).toEqual(true)

})


//是否正浮点数
test('isPostiveFloat', () => {
    expect(fun.isPostiveFloat(1.1)).toEqual(true)

})


//是否负浮点数
test('isNegativeFloat', () => {
    expect(fun.isNegativeFloat(-1.1)).toEqual(true)

})


//是否浮点数
test('isFloat', () => {
    expect(fun.isFloat(1.1)).toEqual(true)

})


//是否浏览器环境
test('isBrowser', () => {
    expect(fun.isBrowser()).toEqual(false)

})


//是否质数
test('isPrime', () => {
    expect(fun.isPrime(2)).toEqual(true)

    expect(fun.isPrime(10)).toEqual(false)

})


//是否ASCII字符
test('isAscii', () => {
    expect(fun.isAscii("dz-&8855")).toEqual(true)

    expect(fun.isAscii("年轻人不讲武德")).toEqual(false)

})


//是否包含空格
test('isHasWhitespace', () => {
    expect(fun.isHasWhitespace("dz-&8855")).toEqual(false)

    expect(fun.isHasWhitespace("年轻人  不讲武德")).toEqual(true)

})


//是否16进制颜色
test('isHexColor', () => {
    expect(fun.isHexColor("#D1B2C3")).toEqual(true)

    expect(fun.isHexColor("f00")).toEqual(false)

})


//是否16进制数字
test('isHexadecimal', () => {
    expect(fun.isHexadecimal("#D1B2C3")).toEqual(false)

    expect(fun.isHexadecimal("A00")).toEqual(true)

})


//是否普通对象
test('isPlainObject', () => {
    expect(fun.isPlainObject("'haha'")).toEqual(false)

    expect(fun.isPlainObject()).toEqual(false)

    expect(fun.isPlainObject({})).toEqual(true)

    expect(fun.isPlainObject("() => {}")).toEqual(false)

    expect(fun.isPlainObject({
        "a": "1",
        "b": "2"
    })).toEqual(true)

})


//是否正则
test('isRegExp', () => {
    expect(fun.isRegExp({})).toEqual(false)

})


//是否字符串
test('isString', () => {
    expect(fun.isString("哈哈测试")).toEqual(true)

    expect(fun.isString(123)).toEqual(false)

})


//是否对象
test('isObject', () => {
    expect(fun.isObject([])).toEqual(true)

    expect(fun.isObject({})).toEqual(true)

})


//是否是函数
test('isFunction', () => {
    expect(fun.isFunction(function () {})).toEqual(true)

    expect(fun.isFunction(function* () {})).toEqual(true)

    expect(fun.isFunction(async function () {})).toEqual(true)

    expect(fun.isFunction(() => {})).toEqual(true)

})


//是否微信号
test('isWeChat', () => {
    expect(fun.isWeChat("abc2232332")).toEqual(true)

})


//是否中文姓名
test('isChineseName', () => {
    expect(fun.isChineseName("张三")).toEqual(true)

    expect(fun.isChineseName("zhang三")).toEqual(false)

})


//是否英文姓名
test('isEnglishName', () => {
    expect(fun.isEnglishName("lily")).toEqual(true)

    expect(fun.isEnglishName("shily 杨")).toEqual(false)

})


//是否子网掩码
test('isSubnetMask', () => {
    expect(fun.isSubnetMask("255.255.255.0")).toEqual(true)

    expect(fun.isSubnetMask("257.255.255.0")).toEqual(false)

})


//是否手机号码
test('isPhone', () => {
    expect(fun.isPhone("18310221234")).toEqual(true)

})


//是否邮箱
test('isEmail', () => {
    expect(fun.isEmail("123@test.com")).toEqual(true)

})


//是否html标签
test('isHTMLTag', () => {
    expect(fun.isHTMLTag("div")).toEqual(true)

})


//是否svg标签
test('isSvgTag', () => {
    expect(fun.isSvgTag("svg")).toEqual(true)

})


//是否日期
test('isDate', () => {
    expect(fun.isDate(new Date())).toEqual(true)

})


//是否emoji字符
test('isEmoji', () => {
    expect(fun.isEmoji("☺")).toEqual(true)

})

test('isLicensePlate', () => {
    expect(fun.isLicensePlate("京A2345D")).toEqual(true)
})

test('isPwdStrength', () => {
    expect(fun.isPwdStrength("U#3p09sd")).toEqual(true)

    expect(fun.isPwdStrength("qwer122323")).toEqual(false)
})

test('isIPV4', () => {
    expect(fun.isIPV4("127.0.0.1")).toEqual(true)

    expect(fun.isIPV4("234.345.123.3")).toEqual(false)
})

test('isIPV6', () => {
    expect(fun.isIPV6("fe80::1457:990b:fd57:d88c%23")).toEqual(true)
    expect(fun.isIPV6("127.0.0.1")).toEqual(false)
})


test('isMacAddress', () => {
    expect(fun.isMacAddress("28-D2-44-A6-05-55")).toEqual(true)

    expect(fun.isMacAddress("24:f9:a3:7b:d5:51")).toEqual(true)
})

test('isUrl', () => {
    expect(fun.isUrl("https://www.baidu.com")).toEqual(true)
    expect(fun.isUrl("http://www.baidu.com")).toEqual(true)
    expect(fun.isUrl("http://2232")).toEqual(false)
})

test('isVersion', () => {
    expect(fun.isVersion("1.0.2")).toEqual(true)
    expect(fun.isVersion("1.3")).toEqual(false)

})


test('isLeapYear', () => {
    expect(fun.isLeapYear(2020)).toEqual(true)
    expect(fun.isLeapYear(2021)).toEqual(false)

})