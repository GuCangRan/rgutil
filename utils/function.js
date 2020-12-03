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

/**
 * 节流
 * 节流操作使回调函数在每隔一段时间定期执行一次，时间间隔内再触发，不会重新执行。
 * @param {*} func 
 * @param {*} timerNumber 
 */
export const throttle = (func, wait = 100) => {
    let timer = false;
    return (...args) => {
        if (timer) {
            return;
        }
        timer = true;
        timer = setTimeout(() => {
            func(...args)
            timer = false;
        }, wait)
    }
}

/**
 * 防抖
 * 短时间内多次触发一个函数,只执行最后一次,或在开始时执行
 * @param {*} fn 
 * @param {*} delay 
 */
export const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

/**
 * 获取URL参数
 * @param {*} param 
 * @param {*} url 
 * @param {*} nullDefault 
 */
export const urlParam = (param, nullDefault = null, url = window.location.href) => {
    let p = new URLSearchParams(new URL(url).search).get(param);
    return p ? p : nullDefault;
}

/**
 * 获取随机数
 * @param {*} min 
 * @param {*} max 
 */
export const randomNum = (min = 0, max = 0) => {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
}

/**
 * 首字母大写
 * @param {*} param0 
 */
export const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

/**
 * 每个首字母都大写
 * @param {*} str 
 */
export const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * 首字母小写
 * @param {*} param0 
 */
export const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('')

/**
 * 每个首字母都小写
 * @param {*} str 
 */
export const decapitalizeEveryWord = str => str.replace(/\b[A-Z]/g, char => char.toLowerCase());