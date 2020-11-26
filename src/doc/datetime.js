const children = [{
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