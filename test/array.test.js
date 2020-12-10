import * as fun from '../utils/array'


//数组去重
test('arrDistinct', () => {
    expect(fun.arrDistinct([2, 3, 3, 3])).toEqual([2, 3])
    expect(fun.arrDistinct(["red", "green", "blue", "red"])).toEqual(["red", "green", "blue"])
    expect(fun.arrDistinct([
        [1, 2],
        [1, 2, 3],
        [1, 2, 3]
    ])).toEqual([
        [1, 2],
        [1, 2, 3],
        [1, 2, 3]
    ])
})


//数组最大值
test('arrMax', () => {
    expect(fun.arrMax([0, 9, 18, 6])).toEqual(18)
})


//数组最小值
test('arrMin', () => {
    expect(fun.arrMin([0, 9, 18, 6])).toEqual(0)
})


//出现次数
test('arrCountOcc', () => {
    expect(fun.arrCountOcc([0, 9, 18, 6, 3, 6], 6)).toEqual(2)

    expect(fun.arrCountOcc(["red", "red", "green"], "red")).toEqual(2)
})


//数组扁平
test('arrDeepFlatten', () => {
    expect(fun.arrDeepFlatten([
        [1, 2, [1, 2, [1, 2, [2, 3]]]]
    ])).toEqual([1, 2, 1, 2, 1, 2, 2, 3])
    expect(fun.arrDeepFlatten(["red", "green", ["blue", "red"]])).toEqual(["red", "green", "blue", "red"])
})


//数组差异对比
test('arrDiff', () => {
    expect(fun.arrDiff([0, 9, 18, 6, 3, 6], [33, 44, 5])).toEqual([0, 9, 18, 6, 3, 6])

    expect(fun.arrDiff(["red", "red", "green"], ["red"])).toEqual(["green"])
})


//去除出现一次值
test('arrNonUnique', () => {
    expect(fun.arrNonUnique([0, 9, 18, 6, 9, 6])).toEqual([9, 6, 9, 6])
    expect(fun.arrNonUnique(["red", "red", "green"])).toEqual(["red", "red"])
})


//构建默认数组
test('arrWithValues', () => {
    expect(fun.arrWithValues({
        "parmMore": [6, 8]
    })).toEqual([0])
    expect(fun.arrWithValues({
        "parmMore": [6, "red"]
    })).toEqual([0])
})


//数组交集
test('arrIntersection', () => {
    expect(fun.arrIntersection(
        [5, 6, 7, 8],
        [6, 7, 8, 9, 10]
    )).toEqual([6, 7, 8])

    expect(fun.arrIntersection(
        ["red"],
        ["green"]
    )).toEqual([])
})


//获取第n个元素
test('arrNthElement', () => {
    expect(fun.arrNthElement([5, 6, 7, 8], 2)).toEqual(7)

    expect(fun.arrNthElement(["red"], 1)).toEqual([])
})


//求平均数
test('arrAverage', () => {
    expect(fun.arrAverage(1, 2, 3)).toEqual(2)
    expect(fun.arrAverage(1, 2, 7)).toEqual(3.3333333333333335)
})


//数组对象某属性平均数
test('arrAverageBy', () => {
    expect(fun.arrAverageBy([{
        "n": 1
    }, {
        "n": 3
    }, {
        "n": 5
    }], o => o.n)).toEqual(3)

    expect(fun.arrAverageBy(
        [{
            "n": 1
        }, {
            "n": 3
        }, {
            "n": 5
        }], "n"
    )).toEqual(3)
})


//转换为数组
test('arrAsList', () => {
    expect(fun.arrAsList("abc")).toEqual(["abc"])
    expect(fun.arrAsList(8)).toEqual([8])
    expect(fun.arrAsList([8])).toEqual([8])
})


//获取值所在索引
test('arrIndexOfAll', () => {
    expect(fun.arrIndexOfAll(
        [3, 2, 3, 3, 5, 3], 3
    )).toEqual([0, 2, 3, 5])

    expect(fun.arrIndexOfAll(
        [1, 2, 7], 6
    )).toEqual([])
})


//指定长度升序数组
test('arrMinN', () => {
    expect(fun.arrMinN([3, 2, 3, 3, 5, 3], 3)).toEqual([2, 3, 3])

    expect(fun.arrMinN([1, 2, 7])).toEqual([1])
})


//指定长度随机数组
test('arrRandomInRange', () => {
    let lnum = fun.arrRandomInRange(10, 16, 3);
    let isExist = true;
    for (let index = 0; index < lnum.length; index++) {
        const el = lnum[index];
        if (el < 10 || el > 16) {
            isExist = false;
        }
    }

    expect(lnum.length == 3 && isExist).toEqual(true)
})


//数组随机抽取一个
test('arrRandomSample', () => {
    expect([10, 16, 3].includes(fun.arrRandomSample([10, 16, 3]))).toEqual(true)
    expect(["red", "green", "blue"].includes(fun.arrRandomSample(["red", "green", "blue"]))).toEqual(true)
})


//数组随机抽取多个
test('arrRandomN', () => {
    expect(fun.arrRandomN([3, 2, 3, 3, 5, 3], 3).length == 3).toEqual(true)
    expect(fun.arrRandomN([1, 2, 7], 5).length == 3).toEqual(true)
})


//数组随机打乱
test('arrShuffle', () => {
    let testArr = fun.arrShuffle([10, 16, 3]);
    let isEist = true;
    testArr.forEach(element => {
        if ([10, 16, 3].includes(element) == false) {
            isEist = false;
        }
    });

    expect(isEist).toEqual(true)

})


//数组转换树
test('arrToTree', () => {
    expect(fun.arrToTree([{
        "id": 1,
        "parent_id": null
    }, {
        "id": 2,
        "parent_id": 1
    }, {
        "id": 3,
        "parent_id": 1
    }, {
        "id": 4,
        "parent_id": 2
    }, {
        "id": 5,
        "parent_id": 4
    }])).toEqual([{
        "id": 1,
        "parent_id": null,
        "children": [{
            "id": 2,
            "parent_id": 1,
            "children": [{
                "id": 4,
                "parent_id": 2,
                "children": [{
                    "id": 5,
                    "parent_id": 4,
                    "children": []
                }]
            }]
        }, {
            "id": 3,
            "parent_id": 1,
            "children": []
        }]
    }])
})


//交换矩阵的行和列
test('arrTranspose', () => {
    expect(fun.arrTranspose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])).toEqual([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ])
})