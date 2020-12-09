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