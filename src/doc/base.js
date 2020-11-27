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
    // {
    //     base: {
    //         name: "isLuhnCheck",
    //         title: "是否银行卡",
    //         desc: "银行卡号码校验（luhn算法）",
    //         parmInfo: "(value)"
    //     },
    //     demo: ["4485275742308327"]
    // }
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