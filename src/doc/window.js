const children = [{
        base: {
            name: "goToTop",
            title: "滚动页面顶部",
            desc: `滚动页面顶部
            isAnimation = flase :直接滚动到顶部
            isAnimation = true  :滚动到顶部,具备滚动效果
            `,
            parmInfo: "(isAnimation = false)",
            showDemo: false
        },
        demo: []
    },
    {
        base: {
            name: "goToTopClassName",
            title: "滚动class元素顶部",
            desc: "某个具备class元素内置滚动轴回到顶部,相同class多个只处理第一个",
            parmInfo: "(className)",
            showDemo: false
        },
        demo: []
    },
    {
        base: {
            name: "goToTopId",
            title: "滚动ID顶部",
            desc: "某个具备id元素内置滚动轴回到顶部",
            parmInfo: "(id, isAnimation = false)",
            showDemo: false
        },
        demo: []
    },
    {
        base: {
            name: "getSelectedText",
            title: "获取所选元素",
            desc: "获取所选元素",
            parmInfo: "()",
            showDemo: false
        },
        demo: []
    },
    {
        base: {
            name: "setLocalStorage",
            title: "存储到localStorage",
            desc: "存储到localStorage",
            parmInfo: "(key, value)",
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "getLocalStorage",
            title: "读取localStorage",
            desc: "读取localStorage",
            parmInfo: "(key)",
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "setCookie",
            title: "创建cookie",
            desc: "创建cookie 默认,24小时",
            parmInfo: "(key, value, expireHours = 24)",
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "getCookie",
            title: "读取cookie",
            desc: "读取cookie",
            parmInfo: "(key)",
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "delCookie",
            title: "删除cookie",
            desc: "删除cookie",
            parmInfo: "(key)",
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "pageViewHeight",
            title: "页面可视高度",
            desc: "获取页面可视高度",
            parmInfo: "()",
            showDemo: false
        },
        demo: [""]
    },
    {
        base: {
            name: "pageViewWidth",
            title: "页面可视宽度",
            desc: "获取页面可视宽度",
            parmInfo: "()",
            showDemo: false
        },
        demo: [""]
    },
    {
        base: {
            name: "scrollPostion",
            title: "获取滚动轴位置",
            desc: "获取滚动轴位置",
            parmInfo: "(el = window)",
            showDemo: false
        },
        demo: [""]
    },
    {
        base: {
            name: "copyText",
            title: "复制文本",
            desc: "复制文本",
            parmInfo: "(str)",
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "fullscreen",
            title: "进入全屏",
            desc: "进入全屏",
            parmInfo: "(selector = document.body)",
            isInput: false,
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "exitFullscreen",
            title: "退出全屏",
            desc: "退出全屏",
            parmInfo: "()",
            isInput: false,
            testmode: "button"
        },
        demo: []
    },
    {
        base: {
            name: "isFullScreen",
            title: "是否全屏状态",
            desc: "是否全屏状态",
            parmInfo: "()",
            isInput: false,
            testmode: "button"
        },
        demo: []
    }
]

const docData = {
    title: {
        label: "系统",
        value: "window",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData;