const children = [{
        base: {
            name: "byteSize",
            title: "获取字节",
            desc: "获取字节长度",
            parmInfo: "(string)"
        },
        demo: [{
                parms: [
                    ["微笑"]
                ],
                desc: ["\"微笑\""],
            },
            {
                parms: [
                    ["wu de"]
                ],
                desc: ["\"wu de\"]"],

            }
        ]
    },
    {
        base: {
            name: "splitLines",
            title: "换行字符串转数组",
            desc: "正则表达式匹配换行符并创建一个数组",
            parmInfo: "(string)"
        },
        demo: [{
            parms: ["wu\nde\nha\nqiu"],
            desc: ["\"wu\\nde\\nha\\nqiu\""]
        }]
    },
    {
        base: {
            name: "removeHTMLTags",
            title: "移除html标签",
            desc: "删除字符串中的html标签",
            parmInfo: "(string)"
        },
        demo: [{
            parms: ["<div v-for='(group, index) in listDoc' :key='index'>123</div>"],
            desc: ["\"<div v-for='(group, index) in listDoc' :key='index'>123</div>\""]
        }]
    },
    {
        base: {
            name: "getType",
            title: "获取对象类型",
            desc: "获取当前对象类型",
            parmInfo: "(any)"
        },
        demo: [null, undefined, () => {}, {},
            []
        ]
    },
    {
        base: {
            name: "escapeHTML",
            title: "转义html",
            desc: "将html标签进行转移",
            parmInfo: "(string)"
        },
        demo: [{
            parms: ["<div v-for='(group, index) in listDoc' :key='index'>123</div>"],
            desc: ["\"<div v-for='(group, index) in listDoc' :key='index'>123</div>\""]
        }]
    }
]
const docData = {
    title: {
        label: "函数",
        value: "function",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData;