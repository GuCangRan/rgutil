const children = [{
        base: {
            name: "dateFormat",
            title: "格式化日期",
            desc: `格式化日期
              valueFormat: yyyy-MM-dd HH:mm:fff
                           yy   M  d  H  m  f    格式任意组合\n
              dateTime: 可不传值, 默认当前日期new Date()
              timeDiff=8:默认增加8小时,国内不用处理,如果有时区差异地区,可调整此时区来获取当地时间`,
            parmInfo: "(valueFormat, dateTime = new Date(),timeDiff=8)"
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
                desc: [`new Date("2020-09-16")`],
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
            title: "英语-指定日期的周几",
            desc: "获取指定日期的周几,英语",
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
    },
    {
        base: {
            name: "monthNameEnglish",
            title: "英语-指定日期的几月",
            desc: "获取指定日期是几月,英语显示",
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
            name: "monthNameChinese",
            title: "汉语-指定日期的几月",
            desc: "获取指定日期是几月,汉语显示",
            parmInfo: "(date, isNum = true)"
        },
        demo: [{
                parms: [new Date()],
                desc: ["new Date()"],
            },
            {
                parms: [new Date(), false],
                desc: ["new Date(),false"],
            }
        ]
    },
    {
        base: {
            name: "timeDistance",
            title: "时间距离",
            desc: `传入时间与当前时间的距离描述,比如10天前,此刻,10秒前
            具体分为: 年, 个月, 星期, 天, 小时, 分钟, 秒`,
            parmInfo: "(startDate)"
        },
        demo: [{
            parms: [new Date(2020, 11, 11)],
            desc: ["new Date(2020,11,11)"],
        }]
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