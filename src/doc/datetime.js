const children = [{
        base: {
            name: "dateFormat",
            title: "格式化日期",
            desc: `格式化日期
              valueFormat: yyyy-MM-dd HH:mm:fff
                           yy   M  d  H  m  f    格式任意组合\n
              dateTime: 默认当前日期new Date()`,
            parmInfo: "(valueFormat, dateTime = new Date())"
        },
        demo: [{
            parms: ["yyyy-MM-dd HH:mm:fff"],
            desc: [`"yyyy-MM-dd HH:mm:fff"`],
        }, {
            parms: ["yyyy-MM-dd HH:mm:fff", new Date(2020, 10, 1, 10, 10, 10)],
            desc: [`"yyyy-MM-dd HH:mm:fff",new Date(2020,10,1,10,10,10)`],
        }]
    },
    {
        base: {
            name: "daysDiff",
            title: "日期之差天数",
            desc: "计算两个日期之间的差异天数",
            parmInfo: "(date,date)"
        },
        demo: [{
            parms: [new Date("2020-09-18"), new Date("2021-01-18")],
            desc: ["new Date(\"2020-09-18\"), new Date(\"2021-01-18\")"],
        }, ]
    },
    {
        base: {
            name: "monthDiff",
            title: "日期之差月数",
            desc: "计算两个日期之间的月数",
            parmInfo: "(date,date)"
        },
        demo: [{
            parms: [new Date("2020-09-18"), new Date("2021-01-18")],
            desc: ["new Date(\"2020-09-18\"), new Date(\"2021-01-18\")"],
        }]
    },
    {
        base: {
            name: "dayOfYear",
            title: "日期一年中哪一天",
            desc: "日期获取一年中的哪一天",
            parmInfo: "(date)"
        },
        demo: [{
                parms: [new Date("2020-09-16")],
                desc: ["new Date(\"2020-09-16\")"],
            }

        ]
    },
    {
        base: {
            name: "daysInMonth",
            title: "某年某月的天数",
            desc: `获取某年某月的天数
            参数:
            month: 1-12月
            `,
            parmInfo: "(year, month)"
        },
        demo: [{
                parms: [2020, 9],
                desc: ["2020,9"],
            }

        ]
    },
    {
        base: {
            name: "weekDayEnglish",
            title: "英文-指定日期的周几",
            desc: "获取指定日期的周几,英文",
            parmInfo: "(date)"
        },
        demo: [{
                parms: [new Date()],
                desc: ["new Date()"],
            }

        ]
    },
    {
        base: {
            name: "weekDayChinese",
            title: "汉语-指定日期的周几",
            desc: "获取指定日期的周几,汉语显示",
            parmInfo: "(date)"
        },
        demo: [{
                parms: [new Date()],
                desc: ["new Date()"],
            }

        ]
    }
]
const docData = {
    title: {
        label: "日期",
        value: "array",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData;