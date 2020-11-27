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
 * 当然是用来防XSS攻击啦
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