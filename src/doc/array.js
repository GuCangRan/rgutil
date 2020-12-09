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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
        base: {
            name: "arrAverage",
            title: "求平均数",
            desc: "求取平均数",
            parmInfo: "(any)"
        },
        demo: [{
            parms: [
                ...[1, 2, 3]
            ],
            desc: ["...[1, 2, 3]"],
        }, {
            parms: [
                1, 2, 7
            ],
            desc: ["1, 2, 7"],
        }]
    },
    {
        base: {
            name: "arrAverageBy",
            title: "数组对象某属性平均数",
            desc: "求取数组对象某属性平均数",
            parmInfo: "(arr,fn)"
        },
        demo: [{
            parms: [
                [{
                    n: 1
                }, {
                    n: 3
                }, {
                    n: 5
                }], o => o.n
            ],
            desc: ["[{ n: 1 }, { n: 3 }, { n: 5 }],o => o.n"],
        }, {
            parms: [
                [{
                    n: 1
                }, {
                    n: 3
                }, {
                    n: 5
                }], 'n'
            ],
            desc: ["[{ n: 1 }, { n: 3 }, { n: 5 }],'n'"],
        }]
    },
    {
        base: {
            name: "arrAsList",
            title: "转换为数组",
            desc: "其他类型转换为数组",
            parmInfo: "(arr,fn)"
        },
        demo: ['abc', 8, [8]]
    },
    {
        base: {
            name: "arrIndexOfAll",
            title: "获取值所在索引",
            desc: "获取数组指定值的所有索引",
            parmInfo: "(arr, val)"
        },
        demo: [{
            parms: [
                [3, 2, 3, 3, 5, 3], 3
            ],
            desc: ["[1, 2, 3, 1, 2, 3],3"],
        }, {
            parms: [
                [1, 2, 7], 6
            ],
            desc: ["[1, 2, 7], 6"],
        }]
    },
    {
        base: {
            name: "arrMinN",
            title: "指定长度升序数组",
            desc: "返回指定长度的升序数组",
            parmInfo: "(arr, n = 1)"
        },
        demo: [{
            parms: [
                [3, 2, 3, 3, 5, 3], 3
            ],
            desc: ["[1, 2, 3, 1, 2, 3],3"],
        }, {
            parms: [
                [1, 2, 7]
            ],
            desc: ["[1, 2, 7]"],
        }]
    },
    {
        base: {
            name: "arrRandomInRange",
            title: "指定长度随机数组",
            desc: "生成两数之间指定长度的随机数组",
            parmInfo: "(min, max, n = 1)"
        },
        demo: [{
                parmMore: [10, 16, 3]
            }, {
                parmMore: [10, 16, 10]
            }

        ]
    },
    {
        base: {
            name: "arrRandomSample",
            title: "数组随机抽取一个",
            desc: "在指定数组中获取随机数,返回一个值",
            parmInfo: "(arr)"
        },
        demo: [
            [10, 16, 3],
            ["red", "green", "blue"],
        ]
    },
    {
        base: {
            name: "arrRandomN",
            title: "数组随机抽取多个",
            desc: "在指定数组中获取指定长度的数组,返回一个数组",
            parmInfo: "([...arr], n = 1)"
        },
        demo: [{
            parms: [
                [3, 2, 3, 3, 5, 3], 3
            ],
            desc: ["[1, 2, 3, 1, 2, 3],3"],
        }, {
            parms: [
                [1, 2, 7], 5
            ],
            desc: ["[1, 2, 7],5"],
        }]
    },
    {
        base: {
            name: "arrShuffle",
            title: "数组随机打乱",
            desc: "数组随机打乱产生新的数组,返回一个值",
            parmInfo: "(arr)"
        },
        demo: [
            [10, 16, 3],
            ["red", "green", "blue"],
        ]
    },
    {
        base: {
            name: "arrToTree",
            title: "数组转换树",
            desc: "将数组转换为树形结构的对象",
            parmInfo: "(items, id = null, link = 'parent_id')"
        },
        demo: [
            [{
                    id: 1,
                    parent_id: null
                },
                {
                    id: 2,
                    parent_id: 1
                },
                {
                    id: 3,
                    parent_id: 1
                },
                {
                    id: 4,
                    parent_id: 2
                },
                {
                    id: 5,
                    parent_id: 4
                }
            ]
        ]
    },
    {
        base: {
            name: "arrTranspose",
            title: "交换矩阵的行和列",
            desc: `交换矩阵的行和列
            注意: 矩阵是指行和列 数量相等哦,我没嘲笑你不懂,主要我怕有不懂的`,
            parmInfo: "(array)"
        },
        demo: [
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ]
        ]
    }
];

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