/**通用函数类 */

/**
 * 获取字节
 * @param {*} str 
 */
export const byteSize = str => new Blob([str]).size;

/**
 * 将多行字符串换行并转换为数组
 * @param {*} str 
 */
export const splitLines = str => str.split(/\r?\n/);

/**
 * 删除字符串中的HTMl标签
 * @param {*} str 
 */
export const removeHTMLTags = str => str.replace(/<[^>]*>/g, '');

/**
 * 获取当前对象类型
 * @param {*} v 
 */
export const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();


/**
 * 去除HTML标签
 * @param {*} str 
 */
export const escapeHTML = str =>
    str.replace(
        /[&<>'"]/g,
        tag =>
        ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        } [tag] || tag)
    );

/**
 * 将数字进行分割
 * @param {*} num  数字
 * @param {*} cnt 要分割的数量
 * @param {*} split 分隔符,默认,
 */
export const formatNumber = (num, cnt = 3, split = ',') => {
    //let reg = /\B(?=(\d{3})+(?!\d))/g;
    let reg = new RegExp(`\\B(?=(\\d{${cnt}})+(?!\\d))`, "g")
    // num.toString().replace(reg, ($, $1) => {
    //     console.log("22", $, $1);
    // })
    return num.toString().replace(reg, split);
}

/**
 * 将字符串进行分割
 * @param {*} val  string
 * @param {*} cnt 要分割的数量
 * @param {*} split 分隔符,默认,
 */
export const formatString = (val, cnt = 3, split = ',') => {
    let reg = new RegExp(`\\B(?=(\\w{${cnt}})+(?!\\w))`, "g")
    return val.replace(reg, split);
}