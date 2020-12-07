/**通用函数类 */

/**
 * 类型检测
 * @param {*} obj 
 */
export const objType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
/**
 * 获取当前对象类型
 * @param {*} v 
 */
//export const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();


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
    return p || nullDefault;
}

/**
 * 获取随机数
 * @param {*} min 
 * @param {*} max 
 */
export const randomNum = (min = 0, max = 0) => parseInt(Math.random() * (max - min + 1) + min, 10);

/**
 * 获取指定位数的随机码（数字+字母（大写））
 * @param {*} codeLength 
 */
export const randomCode = (codeLength = 4) => {
    let code = ''
    let randomCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    while (codeLength--) {
        code += randomCode[randomNum(0, randomCode.length)]
    }
    return code
}

/**
 * 生成随机ip
 */
export const randomIP = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');



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

/**
 * 转为驼峰命名,下划线和中间分隔先进行转换处理
 * @param {*} str 
 */
export const camelCase = (str) => {
    const arr = str
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/[_.\- ]+/g, '-')
        .replace(/(^-)|(-$)/g, '')
        .split('-');

    //移除第一位
    let ret = arr[0];
    arr.shift();

    return ret + arr.map(item => item.replace(/\w/, ($1) => $1.toUpperCase())).join('');
}
/**
 * 驼峰转为连字符
 * @param {*} str 
 */
export const hyphenate = (str) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase()


/**
 * 格式化电话号码
 * @param {*} phone 
 * @param {*} split 
 */
export const formatPhone = (phone, split = "****") => (phone + '').replace(/(\d{3})\d{1,}(\d{4})/, `$1${split}$2`);

/**
 * 比特单位转换
 * @param {*} bytes 
 */
export const bytesToSize = (bytes) => {
    if (bytes === 0) return '0 B'
    var k = 1024;
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    var i = Math.floor(Math.log(bytes) / Math.log(k))
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}


const Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
        e = String(e);
        let t = "";
        let n, r, i, s, o, u, a;
        let f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + Base64._keyStr.charAt(s) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(u) + Base64._keyStr.charAt(a)
        }
        return t
    },
    decode: function (e) {
        let t = "";
        let n, r, i;
        let s, o, u, a;
        let f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = Base64._keyStr.indexOf(e.charAt(f++));
            o = Base64._keyStr.indexOf(e.charAt(f++));
            u = Base64._keyStr.indexOf(e.charAt(f++));
            a = Base64._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function (e) {
        e = e.replace(/rn/g, "n");
        let t = "";
        for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function (e) {
        let t = "";
        let n = 0;
        let r = 0,
            c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
};

/**
 * base64编码
 */
export const base64Encode = Base64.encode;
/**
 * base64解码
 */
export const base64Decode = Base64.decode;

/**
 * 获取uuid
 * @param {*} spit  默认替换指定符号
 */
export const getUUID = (spit = "-") => {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = spit;
    return s.join("");
}

/**
 * 深度克隆对象
 * @param {*} obj 
 */
export const deepClone = (obj) => {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj == null || typeof obj != 'object') return obj

    let res = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key])
        }
    }
    return res
}