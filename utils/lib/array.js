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
//export const arrDeepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? arrDeepFlatten(v) : v));
//二维拼接,不能深度
//export const arrayDeepFlat = arr => arr.reduce((a, v) => a.concat(v), []);

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
export const arrNthElement = (arr, n = 0) => {
    return n >= arr.length ? [] : (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
};