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
    },
    {
        base: {
            name: "formatNumber",
            title: "格式化数值",
            desc: "将数字进行分割",
            parmInfo: "(num, cnt =3, split = ',')"
        },
        demo: [{
            parms: [123456789],
            desc: [`123456789`]
        }, {
            parms: [123456789, 4, '-'],
            desc: [`123456789,4,'-'`]
        }]
    },
    {
        base: {
            name: "formatString",
            title: "格式化字符串",
            desc: "将字符串进行分割",
            parmInfo: "(string, cnt =3, split = ',')"
        },
        demo: [{
            parms: ["absdfsfsdfasdfassad"],
            desc: [`"absdfsfsdfasdfassad"`]
        }, {
            parms: ["absdfsfsdfasdfassad", 4, "-"],
            desc: [`"absdfsfsdfasdfassad", 4, "-"`]
        }]
    },
    {
        base: {
            name: "throttle",
            title: "节流",
            desc: `节流操作使回调函数在每隔一段时间定期执行一次，时间间隔内再触发，不会重新执行。
            用例:
            function test(val) {
                console.log("test throttle" + val);
            }
            
            var myThrottle = throttle(test, 1000);

            myThrottle("测试传参"); //执行
            myThrottle("测试传参"); //节流时间内不执行

            `,
            parmInfo: "(func, wait = 100)",
            showDemo: false
        },
        demo: []
    },
    {
        base: {
            name: "debounce",
            title: "防抖",
            desc: `节流操作使回调函数在每隔一段时间定期执行一次，时间间隔内再触发，不会重新执行。
            用例:
            function test(val) {
                console.log("test throttle" + val);
            }
            
            var myDebounce = debounce(test, 1000);

            myDebounce("测试传参"); //防抖未执行
            myDebounce("测试传参"); //延迟1秒执

            `,
            parmInfo: "(func, wait = 100)",
            showDemo: false
        },
        demo: []
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