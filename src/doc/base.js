const children = [{
        base: {
            name: "is",
            title: "判断数据类型",
            desc: "判断数据是否为指定的数据类型，如果是则返回true",
            parmInfo: "(type, val)"
        },
        demo: [{
                parms: [ArrayBuffer, new ArrayBuffer()],
                desc: ["ArrayBuffer, new ArrayBuffer()"],
            },
            {
                parms: [Array, [1]],
                desc: ["Array,[1]"],
            }, {
                parms: [Map, new Map()],
                desc: ["Map, new Map()"],
            }, {
                parms: [Set, new Set()],
                desc: ["Set, new Set()"],
            },
            {
                parms: [WeakMap, new WeakMap()],
                desc: ["WeakMap, new WeakMap()"],
            },
            {
                parms: [WeakSet, new WeakSet()],
                desc: ["WeakSet, new WeakSet()"],
            },
            {
                parms: [String, ''],
                desc: ["String, '测试'"],
            },
            {
                parms: [Number, 1],
                desc: ["Number, 123"],
            },
            {
                parms: [Number, new Number(1)],
                desc: ["Number, new Number(1)"],
            },
            {
                parms: [Boolean, true],
                desc: ["Boolean, true"],
            },
            {
                parms: [Boolean, new Boolean(true)],
                desc: ["Boolean, new Boolean(true)"],
            },

        ]
    },
    {
        base: {
            name: "isNil",
            title: "是否null或undefined",
            desc: "判断当前变量的值是否为 null 或 undefined，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [8, null, undefined]
    },
    {
        base: {
            name: "isNull",
            title: "是否为null",
            desc: "判断当前变量的值是否为 null，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [8, null, undefined]
    },
    {
        base: {
            name: "isNumber",
            title: "是否数值类型",
            desc: "判断是否数值类型，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [8, null, undefined, NaN]
    },
    {
        base: {
            name: "isArray",
            title: "是否数组类型",
            desc: "判断是否数组类型，如果是则返回true",
            parmInfo: "(obj))"
        },
        demo: [
            [8], {
                A: "test"
            },
            undefined
        ]
    },
    {
        base: {
            name: "isPositiveNum",
            title: "是否正整数",
            desc: "是否正整数，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [8, 1.8, -1]
    }, {
        base: {
            name: "isNegativeNum",
            title: "是否负整数",
            desc: "是否负整数，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [8, 1.8, -1]
    },
    {
        base: {
            name: "isInteger",
            title: "是否整数",
            desc: "是否整数，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [8, 1.8, -2]
    },
    {
        base: {
            name: "isPostiveFloat",
            title: "是否正浮点数",
            desc: "是否正浮点数，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [1.1]
    },
    {
        base: {
            name: "isNegativeFloat",
            title: "是否负浮点数",
            desc: "是否负浮点数，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [-1.1]
    },
    {
        base: {
            name: "isFloat",
            title: "是否浮点数",
            desc: "是否浮点数，如果是则返回true",
            parmInfo: "(val)"
        },
        demo: [1.1]
    },
    {
        base: {
            name: "isBrowser",
            title: "是否浏览器环境",
            desc: "用于判断程序运行环境是否在浏览器，这有助于避免在node环境运行前端模块时出错。",
            parmInfo: "()"
        },
        demo: [""]
    },
    {
        base: {
            name: "isPrime",
            title: "是否质数",
            desc: "是否质数",
            parmInfo: "(num)"
        },
        demo: [2, 10]
    },
    {
        base: {
            name: "isAscii",
            title: "是否ASCII字符",
            desc: "检查字符串是否仅包含ASCII字符",
            parmInfo: "(str)"
        },
        demo: [{
                parms: ["dz-&8855"],
                desc: ["\"dz-&8855\""],
            }, {
                parms: ["年轻人不讲武德"],
                desc: ["\"年轻人不讲武德\""],
            }

        ]
    },
    {
        base: {
            name: "isHasWhitespace",
            title: "是否包含空格",
            desc: "检查字符串是否包含空格",
            parmInfo: "(str)"
        },
        demo: [{
                parms: ["dz-&8855"],
                desc: ["\"dz-&8855\""],
            }, {
                parms: ["年轻人  不讲武德"],
                desc: ["\"年轻人  不讲武德\""],
            }

        ]
    },
    {
        base: {
            name: "isHexColor",
            title: "是否16进制颜色",
            desc: "检查字符串是否为十六进制颜色",
            parmInfo: "(color)"
        },
        demo: [{
                parms: ["#D1B2C3"],
                desc: ["\"#D1B2C3\""],
            }, {
                parms: ["f00"],
                desc: ["\"f00\""],
            }

        ]
    },
    {
        base: {
            name: "isHexadecimal",
            title: "是否16进制数字",
            desc: "检查字符串是否为十六进制颜色",
            parmInfo: "(str)"
        },
        demo: [{
                parms: ["#D1B2C3"],
                desc: ["\"#D1B2C3\""],
            }, {
                parms: ["A00"],
                desc: ["\"A00\""],
            }

        ]
    },
    {
        base: {
            name: "isPlainObject",
            title: "是否普通对象",
            desc: "检查值是否为普通对象",
            parmInfo: "(any)"
        },
        demo: [
            null, "'haha'", [], {}, () => {}, {
                a: '1',
                b: '2'
            }
        ]
    },
    {
        base: {
            name: "isRegExp",
            title: "是否正则",
            desc: "是否正则表达式",
            parmInfo: "(value)"
        },
        demo: [{
                parms: /s+/g,
                desc: ["/s+/g"],
            }

        ]
    },
    {
        base: {
            name: "isString",
            title: "是否字符串",
            desc: "检查值是否为字符串",
            parmInfo: "(value)"
        },
        demo: [{
                parms: ["哈哈测试"],
                desc: ["\"哈哈测试\""],
            },
            {
                parms: [123],
                desc: ["123"],
            }

        ]
    },
    {
        base: {
            name: "isObject",
            title: "是否对象",
            desc: "检查值是否对象",
            parmInfo: "(value)"
        },
        demo: [null, [], {}]
    },
    {
        base: {
            name: "isFunction",
            title: "是否是函数",
            desc: "检查值是否是函数",
            parmInfo: "(function)"
        },
        demo: [function () {},
            function* () {},
            async function () {},
                () => {}
        ]
    },
    {
        base: {
            name: "isWeChat",
            title: "是否微信号",
            desc: "验证微信号，6至20位，以字母开头，字母，数字，减号，下划线",
            parmInfo: "(string)"
        },
        demo: [
            "abc2232332"
        ]
    },
    {
        base: {
            name: "isChineseName",
            title: "是否中文姓名",
            desc: "是否中文姓名",
            parmInfo: "(string)"
        },
        demo: [
            "张三",
            "zhang三"
        ]
    },
    {
        base: {
            name: "isEnglishName",
            title: "是否英文姓名",
            desc: "是否英文姓名",
            parmInfo: "(string)"
        },
        demo: [
            "lily",
            "shily 杨"
        ]
    },
    {
        base: {
            name: "isSubnetMask",
            title: "是否子网掩码",
            desc: "验证子网掩码",
            parmInfo: "(string)"
        },
        demo: [{
                parms: ["255.255.255.0"],
                desc: [`"255.255.255.0"`],
            },
            {
                parms: ["257.255.255.0"],
                desc: [`"257.255.255.0"`],
            }
        ]
    },
    {
        base: {
            name: "isPhone",
            title: "是否手机号码",
            desc: "是否手机号码.验证大陆",
            parmInfo: "(string)"
        },
        demo: ["18310221234"]
    },
    {
        base: {
            name: "isEmail",
            title: "是否邮箱",
            desc: "是否邮箱",
            parmInfo: "(string)"
        },
        demo: ["123@test.com"]
    },
    {
        base: {
            name: "isHTMLTag",
            title: "是否html标签",
            desc: "是否html标签",
            parmInfo: "(string)"
        },
        demo: ["div"]
    },
    {
        base: {
            name: "isSvgTag",
            title: "是否svg标签",
            desc: "是否svg标签",
            parmInfo: "(string)"
        },
        demo: ["svg"]
    },
    {
        base: {
            name: "isDate",
            title: "是否日期",
            desc: "是否日期",
            parmInfo: "(val)"
        },
        demo: [{
            parms: [new Date()],
            desc: [`new Date()`],
        }]
    },
    {
        base: {
            name: "isEmoji",
            title: "是否emoji字符",
            desc: "是否emoji字符",
            parmInfo: "(val)"
        },
        demo: [{
            parms: ["☺"],
            desc: [`"☺"`],
        }]
    },
    {
        base: {
            name: "isLicensePlate",
            title: "是否车牌号",
            desc: "是否车牌号",
            parmInfo: "(val)"
        },
        demo: ["京A2345D"]
    },
    {
        base: {
            name: "isPwdStrength",
            title: "是否强密码",
            desc: "是否强密码，至少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符",
            parmInfo: "(val)"
        },
        demo: ["U#3p09sd"]
    },
    {
        base: {
            name: "isIPV4",
            title: "是否ipv4",
            desc: "是否ipv4",
            parmInfo: "(val)"
        },
        demo: ["127.0.0.1", "234.345.123.3"]
    },
    {
        base: {
            name: "isIPV6",
            title: "是否ipv6",
            desc: "是否ipv4",
            parmInfo: "(val)"
        },
        demo: ["fe80::1457:990b:fd57:d88c%23","127.0.0.1"]
    },
    {
        base: {
            name: "isMacAddress",
            title: "是否mac地址",
            desc: "是否mac地址",
            parmInfo: "(val)"
        },
        demo: ["28-D2-44-A6-05-55", "24:f9:a3:7b:d5:51"]
    },
    {
        base: {
            name: "isUrl",
            title: "是否URL地址",
            desc: "是否URL地址,支持https,http",
            parmInfo: "(val)"
        },
        demo: ["https://www.baidu.com", "http://www.baidu.com"]
    },
    {
        base: {
            name: "isVersion",
            title: "是否X.Y.Z格式版本号",
            desc: "是否X.Y.Z格式版本号,严格模式",
            parmInfo: "(val)"
        },
        demo: ["1.0.2", "1.3"]
    },
    {
        base: {
            name: "isLeapYear",
            title: "是否闰年",
            desc: "是否闰年",
            parmInfo: "(year)"
        },
        demo: [2020, 2021]
    }
];

const docData = {
    title: {
        label: "常规函数",
        value: "base",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData;