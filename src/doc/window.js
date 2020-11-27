const children = [{
        base: {
            name: "goToTop",
            title: "滚动页面顶部",
            desc: "滚动页面顶部",
            parmInfo: "()",
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
            parmInfo: "(id)",
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