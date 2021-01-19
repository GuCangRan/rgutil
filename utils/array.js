/**数组相关函数 */

/**
 * 去除重复数组
 * @param {array} arr 数组
 */
export const arrDistinct = arr => [...new Set(arr)];


/**
 * 返回数组最大值
 * @param {array} arr 
 */
export const arrMax = (arr) => Math.max(...arr);

/**
 * 返回数组最小值
 * @param {array} arr 
 */
export const arrMin = (arr) => Math.min(...arr);

/**
 * 计算数组中值的出现次数
 * @param {*} arr 
 * @param {*} value 
 */
export const arrCountOcc = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

/**
 * 数组扁平化,支持深度
 * @param {*} arr 
 */
export const arrDeepFlatten = (arr, depth = Infinity) => arr.flat(depth);

/**
 * 对比两个数组之间的差异,返回数组
 * @param {*} arr1 
 * @param {*} arr2 
 */
export const arrDiff = (arr1, arr2) => {
    const s = new Set(arr2);
    return arr1.filter(x => !s.has(x));
};

/**
 * 去除数组中只出现一次的值,返回具备多次的值
 * @param {*} arr 
 */
export const arrNonUnique = arr => arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i));

/**
 * 创建默认长度默认值的数组
 * @param {*} count 
 * @param {*} value 
 */
export const arrWithValues = (count, value = 0) => Array(count).fill(value);

/**
 * 获取两个数组中公共元素
 * @param {*} arr1 
 * @param {*} arr2 
 */
export const arrIntersection = (arr1, arr2) => {
    const s = new Set(arr2);
    return arr1.filter(x => s.has(x));
};

/**
 * 获取数组第n个元素
 * @param {*} arr 
 * @param {*} n 
 */
export const arrNthElement = (arr, n = 0) => n >= arr.length ? [] : (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

/**
 * 求取平均数
 * @param  {...any} nums 
 */
export const arrAverage = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * 求取数组对象某变量的平均数
 * @param {*} arr 
 * @param {*} fn 
 */
export const arrAverageBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
    arr.length;

/**
 * 其他类型转换为数组
 * @param {*} val 
 */
export const arrAsList = val => (Array.isArray(val) ? val : [val]);

/**
 * 获取数组指定值的所有索引
 * @param {*} arr 
 * @param {*} val 
 */
export const arrIndexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

/**
 * 返回指定长度的升序数组
 * @param {*} arr 
 * @param {*} n 
 */
export const arrMinN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

/**
 * 生成两数之间指定长度的随机数组
 * @param {*} min 
 * @param {*} max 
 * @param {*} n 
 */
export const arrRandomInRange = (min, max, n = 1) =>
    Array.from({
        length: n
    }, () => Math.floor(Math.random() * (max - min + 1)) + min);

/**
 * 在指定数组中获取随机数,返回一个值
 * @param {*} arr 
 */
export const arrRandomSample = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * 在指定数组中获取指定长度的随机数,返回一个数组
 * @param {*} arr 
 */
export const arrRandomN = ([...arr], n = 1) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
};

/**
 * 数组随机打乱产生新的数组
 * @param {*} array
 */
export const arrShuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

/**
 * 将数组转换为树形结构的对象
 * @param {*} items 
 * @param {*} id 
 * @param {*} link 
 */
export const arrToTree = (items, id = null, link = 'parent_id') =>
    items
    .filter(item => item[link] === id)
    .map(item => ({
        ...item,
        children: arrToTree(items, item.id)
    }));


/**
 * 交换多维数组行和列
 * @param {*} matrix 
 */
export const arrTranspose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

/**
 * 压缩数组
 * @param  {...any} arr 
 */
export const arrZip = (...arr) => Array.from({
    length: Math.max(...arr.map(a => a.length))
}, (_, i) => arr.map(a => a[i]));


/**
 * 解压缩数组
 * @param {*} arr 
 */
export const arrUnZip = arr => arr.reduce((acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc), Array.from({
    length: Math.max(...arr.map(a => a.length))
}, (_) => []));

/**
 * 冒泡排序
 * @param {*} arr 
 * @param {*} isNumTimes 
 */
export const bubbleSort = (arr, isNumTimes = false) => {
    let temp = '',
        sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                flag = true;
            }
            sum++; //计算次数
        }
        if (!flag) {
            break;
        }
    }
    return isNumTimes ? [arr, sum] : arr;
};


/**
 * 插入排序
 * @param {*} arr 
 * @param {*} isNumTimes 
 */
export const insertSort = (arr, isNumTimes = false) => {
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i];
            let j = i - 1;
            arr[i] = arr[j];

            while (j >= 0 && temp < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
                sum++; //统计次数
            };
            arr[j + 1] = temp;
        }
    }
    return isNumTimes ? [arr, sum] : arr;
}

/**
 * 快速排序
 * @param {*} arr 
 * @param {*} isNumTimes 
 */
export const quickSort = (arr, isNumTimes = false) => {
    quickSortObj.sum = 0;
    arr = quickSortObj.quickSort(arr);
    return isNumTimes ? [arr, quickSortObj.sum] : arr;
}

const quickSortObj = {
    sum: 0,
    quickSort: function (arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var medianIndex = Math.floor(arr.length / 2); // 分解值索引
        var medianValue = arr.splice(medianIndex, 1); // 分界值
        var left = [];
        var right = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < medianValue) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
            this.sum++;
        }
        //console.log(medianIndex, medianValue, left, right)
        return this.quickSort(left).concat(medianValue, this.quickSort(right));
    }
};

/**
 * 选择排序
 * @param {*} arr 
 */
export const selectionSort = (arr, isNumTimes = false) => {
    let sum = 0;
    if (arr == null || arr.length < 2) {
        return isNumTimes ? [arr, sum] : arr;
    }
    for (var i = 0; i < (arr.length - 1); i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
            sum++;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return isNumTimes ? [arr, sum] : arr;
}

/**
 * 希尔排序
 * @param {*} arr 
 * @param {*} isNumTimes 
 */
export const shellSort = (arr, isNumTimes = false) => {
    var len = arr.length,
        sum = 0;
    var fraction = Math.floor(len / 2); // 定义间隔区间
    for (fraction; fraction > 0; fraction = Math.floor(fraction / 2)) {
        for (var i = fraction; i < len; i++) {
            for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
                var temp = arr[j];
                arr[j] = arr[fraction + j]; // 后移
                arr[fraction + j] = temp; // 填补
                sum++;
            }
        }
    }
    return isNumTimes ? [arr, sum] : arr;
}