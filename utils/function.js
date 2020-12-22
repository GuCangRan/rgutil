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
 * 转义HTML标签
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
 * 还原HTML标签
 * @param {*} str 
 */
export const unescapeHTML = str =>
    str.replace(
        /(&amp;|&lt;|&gt;|&#39;|&quot;)/g,
        tag =>
        ({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': "'",
            '&quot;': '"'
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
        code += randomCode[randomNum(0, randomCode.length - 1)]
    }
    return code
}

/**
 * 生成随机ip-v4
 */
export const randomIP = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');

/**
 * 随机16进制颜色
 */
export const randomHexColor = () => '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);

/**
 * 随机生成布尔值
 */
export const randomBoolean = () => Math.random() >= 0.5;

/**
 * 随机生成浮点数据
 * @param {*} min 
 * @param {*} max 
 */
export const randomFloat = (min = 0, max = 1) => Math.random() * (max - min) + min;

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
 * 脱敏电话号码
 * @param {*} phone 
 * @param {*} split 
 */
export const privacyPhone = (phone, split = "****") => (phone + '').replace(/(\d{3})\d{1,}(\d{4})/, `$1${split}$2`);

/**
 * 脱敏姓名
 * @param {*} name 
 */
export const privacyName = (name, split = "**") => name.replace(/^(\S)(\S|\s)*$/, `$1${split}`);

/**
 * 比特单位转换
 * @param {*} bytes 
 */
export const bytesToSize = (bytes) => {
    if (bytes === 0) return '0 B'
    let k = 1024;
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = Math.floor(Math.log(bytes) / Math.log(k))
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}



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
export const deepClone = (obj, hash = new WeakMap()) => {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (obj === null || typeof obj !== 'object') { //如果不是复杂数据类型，直接返回
        return obj
    }
    if (hash.has(obj)) {
        return hash.get(obj)
    }

    let t = new obj.constructor()
    hash.set(obj, t)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            t[key] = deepClone(obj[key], hash)
        }
    }
    return t
}
//去除之前写法
// export const deepClone = (obj) => {
//     if (obj instanceof RegExp) return new RegExp(obj)
//     if (obj == null || typeof obj != 'object') return obj

//     let res = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             res[key] = deepClone(obj[key])
//         }
//     }
//     return res
// }

/**
 * 分割路径
 * @param {*} path 
 */
export const splitPath = (path = "") => {
    const match = path.match(/^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/);
    return {
        dir: match[1],
        name: match[2],
        ext: match[3]
    };
}

/**
 * 数字转大写金额
 * @param {*} n 
 */
export const digitUpperCase = (n = 0) => {
    let fraction = ['角', '分'];
    let digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    let unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    let head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}

/**
 * 截取字符串
 * @param {*} str 
 * @param {*} length 
 * @param {*} rep 
 */
export const subText = (str, length = 0, rep = "...") => str.length > length ? (str.substr(0, length) + rep) : str;


/**
 * 格式化路径
 * @param {*} path 
 */
export const formatPath = path => path.replace(/[\\/]+/g, '/');

/**
 * 字符在字符串中出现次数
 * @param {*} str 
 * @param {*} char 
 */
export const characterCount = (str = '', char = '') => str.split(char).length - 1;

//html = document.documentElement.outerHTML
/**
 * 解析内容中http地址
 * @param {*} html 
 */
//export const parseUrl = (html) => html.match(/(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi) || [];

/**
 * 深度冻结对象
 * @param {*} obj 
 */
export const deepFreeze = (obj) => {
    var prop, propKey
    Object.freeze(obj)
    for (propKey in obj) {
        prop = obj[propKey];
        if (!obj.hasOwnProperty(propKey) || !(typeof prop === "object") || Object.isFrozen(prop)) {
            continue;
        }
        deepFreeze(prop);
    }
}

/**
 * 获取星标评分
 * @param {*} rate 
 */
export const starScore = rate => {
    if (rate < 0) rate = 0;
    else if (rate > 5) rate = 5;
    return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
}

/**
 * 只执行一次函数
 * @param {*} fn 
 */
export const once = (fn) => {
    let called = false,
        result;

    return (...rest) => {
        if (called) return result;
        called = true;
        result = fn.apply(null, rest);
        fn = null;
        return result;
    }

}