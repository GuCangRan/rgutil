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
 * md5加密
 * @param {*} string 
 */
export const md5 = function (string) {
    function md5_RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function md5_AddUnsigned(lX, lY) {
        let lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function md5_F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function md5_G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function md5_H(x, y, z) {
        return (x ^ y ^ z);
    }

    function md5_I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function md5_FF(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_GG(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_HH(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_II(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_ConvertToWordArray(string) {
        let lWordCount;
        let lMessageLength = string.length;
        let lNumberOfWords_temp1 = lMessageLength + 8;
        let lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        let lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        let lWordArray = Array(lNumberOfWords - 1);
        let lBytePosition = 0;
        let lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function md5_WordToHex(lValue) {
        let WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function md5_Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        let utftext = "";
        for (let n = 0; n < string.length; n++) {
            let c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    let x = Array();
    let k, AA, BB, CC, DD, a, b, c, d;
    let S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22;
    let S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20;
    let S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23;
    let S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;
    string = md5_Utf8Encode(string);
    x = md5_ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = md5_AddUnsigned(a, AA);
        b = md5_AddUnsigned(b, BB);
        c = md5_AddUnsigned(c, CC);
        d = md5_AddUnsigned(d, DD);
    }
    return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
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