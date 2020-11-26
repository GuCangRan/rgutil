/**
 * 数组函数文档
 */

const children = [{
    base: {
        name: "arrDistinct",
        title: "数组去重",
        desc: "去除数组重复元素,返回新数组",
        parmInfo: "(array)"
    },
    demo: [
        [2, 3, 3, 3],
        null,
        undefined,
        ["red", "green", "blue", "red"],
        [
            [1, 2],
            [1, 2, 3],
            [1, 2, 3],
        ]

    ]
}, {
    base: {
        name: "arrMax",
        title: "数组最大值",
        desc: "返回数组最大值",
        parmInfo: "(array)"
    },
    demo: [
        [0, 9, 18, 6]
    ]
}, {
    base: {
        name: "arrMin",
        title: "数组最小值",
        desc: "返回数组最小值",
        parmInfo: "(array)"
    },
    demo: [
        [0, 9, 18, 6]
    ]
}, , {
    base: {
        name: "arrCountOcc",
        title: "出现次数",
        desc: "计算数组中值的出现次数",
        parmInfo: "(arr, value)"
    },
    demo: [{
        parms: [
            [0, 9, 18, 6, 3, 6], 6
        ],
        desc: ["[0,9,18,6,3,6], 6"],
    }, {
        parms: [
            ["red", "red", "green"], "red"
        ],
        desc: ["[\"red\",\"red\",\"green\"], \"red\""],
    }]
}, {
    base: {
        name: "arrDeepFlatten",
        title: "数组扁平",
        desc: "将多维数组组合为一维",
        parmInfo: "(array)"
    },
    demo: [
        [
            [1, 2, [1, 2, [1, 2, [2, 3]]]]
        ],
        ["red", "green", ["blue", "red"]]
    ]
}, {
    base: {
        name: "arrDiff",
        title: "数组差异对比",
        desc: "对比两个数组之间的差异,返回arr1在arr2中不包含的数组",
        parmInfo: "(arr1,arr2)"
    },
    demo: [{
        parms: [
            [0, 9, 18, 6, 3, 6],
            [33, 44, 5]
        ],
        desc: ["[0, 9, 18, 6, 3, 6], [33,44,5]"],
    }, {
        parms: [
            ["red", "red", "green"],
            ["red"]
        ],
        desc: ["[\"red\",\"red\",\"green\"], [\"red\"]"],
    }]
}, {
    base: {
        name: "arrNonUnique",
        title: "去除出现一次值",
        desc: "去除数组中只出现一次的值,返回具备多次的值",
        parmInfo: "(arr1,arr2)"
    },
    demo: [
        [0, 9, 18, 6, 9, 6],
        ["red", "red", "green"]
    ]
}, {
    base: {
        name: "arrWithValues",
        title: "构建默认数组",
        desc: "创建默认长度默认值的数组",
        parmInfo: "(count, value=0)"
    },
    demo: [{
        parmMore: [6, 8]
    }, {
        parmMore: [6, "red"]
    }]
}, {
    base: {
        name: "arrIntersection",
        title: "数组交集",
        desc: "获取两个数组中公共元素",
        parmInfo: "(arr1, arr2)"
    },
    demo: [{
        parms: [
            [5, 6, 7, 8],
            [6, 7, 8, 9, 10]
        ],
        desc: ["[5, 6, 7, 8], [6, 7, 8, 9, 10]"],
    }, {
        parms: [
            ["red"],
            ["green"]
        ],
        desc: ["\"red\", [\"green\"]"],
    }]
}, {
    base: {
        name: "arrNthElement",
        title: "获取第n个元素",
        desc: "获取数组第n个元素(n是数组索引)",
        parmInfo: "(arr, n = 0)"
    },
    demo: [{
        parms: [
            [5, 6, 7, 8], 2
        ],
        desc: ["[5, 6, 7, 8], 2"],
    }, {
        parms: [
            ["red"], 1
        ],
        desc: ["\"red\", 1"],
    }]
}, ];

const docData = {
    title: {
        label: "数组",
        value: "array",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData;