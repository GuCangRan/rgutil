/**
 * 常规函数
 */

/**
 * 判断数据是否为指定的数据类型，如果是则返回true。
 * @param {*} type 源对象类型
 * @param {*} val  目标对象
 */
export const is = (type, val) => ![, null].includes(val) && val.constructor === type;

/**
 * 判断当前变量的值是否为 null 或 undefined
 * @param {*} val 
 */
export const isNil = val => val === undefined || val === null;

/**
 * 是否为null
 * @param {*} val 
 */
export const isNull = val => val === null;

/**
 * 是否数值类型
 * @param {*} val 
 */
export const isNumber = val => !isNaN(parseFloat(val)) && isFinite(val);

/**
 * 是否数组类型
 * @param {*} obj 
 */
export const isArray = obj => Array.isArray(obj);


/**
 * 是否正整数
 * @param {*} val 
 */
export const isPositiveNum = val => /^[1-9]\d*$/.test(val);

/**
 * 是否负整数
 * @param {*}} val 
 */
export const isNegativeNum = val => /^-[1-9]\d*$/.test(val);

/**
 * 匹配整数
 * @param {*} val 
 */
export const isInteger = val => /^(-|\+)?\d+$/.test(val);

/**
 * 匹配正浮点数
 */
export const isPostiveFloat = val => /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/.test(val)


/**
 * 匹配负浮点数
 */
export const isNegativeFloat = val => /^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$/.test(val)

/**
 * 匹配浮点数
 */
export const isFloat = val => /^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$/.test(val)


/**
 * 用于判断程序运行环境是否在浏览器，这有助于避免在node环境运行前端模块时出错。
 */
export const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/**
 * 是否质数
 * @param {*} num 
 */
export const isPrime = num => (num > 1) && Array(Math.floor(Math.sqrt(num)) - 1).fill(0).map((_, i) => i + 2).every(i => num % i !== 0);

/**
 * 检查字符串是否仅包含ASCII字符
 * @param {*} str 
 */
export const isAscii = str => /^[\x00-\x7F]+$/.test(str);

/**
 * 检查字符串是否包含空格
 * @param {*} str 
 */
export const isHasWhitespace = str => /\s/.test(str);

/**
 * 检查字符串是否为十六进制颜色
 * @param {*} color 
 */
export const isHexColor = color => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

/**
 * 检查字符串是否为十六进制数字
 * @param {*} str 
 */
export const isHexadecimal = str => /^[A-F0-9]+$/i.test(str);

/**
 * 检查值是否为普通对象
 * @param {*} v 
 */
export const isPlainObject = v => (!!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype));

/**
 * 是否正则表达式
 * @param {*} value 
 */
export const isRegExp = value => Object.prototype.toString.call(value) === '[object RegExp]';

/**
 * 检查值是否为字符串
 * @param {*} value 
 */
export const isString = value => Object.prototype.toString.call(value) === '[object String]';

/**
 * 是否对象
 * @param {*} v 
 */
export const isObject = v => (v !== null && typeof v === 'object');

/**
 * 是否是函数
 * @param {*} v 
 */
export const isFunction = v => ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(v));

/**
 * 是否是微信
 * @param {*} value 
 */
export const isWeChat = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);

/**
 * 验证中文姓名
 * @param {string} value 
 */
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);


/**
 * 验证英文姓名
 *@param { string } value
 */
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);

/**
 * 验证子网掩码
 * @param {*} value 
 */
export const isSubnetMask = value => /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);

/**
 * 是否手机号码
 * @param {*} val 
 */
export const isPhone = (val) => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(val);
// /^1[3456789]\d{9}$/.test(val);

/**
 * 是否邮箱
 * @param {*} val 
 */
export const isEmail = (val) => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);

/**
 * 是否html标签
 * @param {*} str 
 */
let cacheHTMLTag = [];
export const isHTMLTag = (str) => {
    if (cacheHTMLTag.length == 0) {
        cacheHTMLTag = `html,body,base,head,link,meta,style,title, 
        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, 
        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, 
        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, 
        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, 
        embed,object,param,source,canvas,script,noscript,del,ins, 
        caption,col,colgroup,table,thead,tbody,td,th,tr, 
        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, 
        output,progress,select,textarea, 
        details,dialog,menu,menuitem,summary, 
        content,element,shadow,template,blockquote,iframe,tfoot`.replace(/\s+/g, '').split(",");
    }
    return cacheHTMLTag.includes(str);
}
/**
 * 是否svg标签
 * @param {*} str 
 */
let cacheSvgTag = [];
export const isSvgTag = (str) => {
    if (cacheSvgTag.length == 0) {
        cacheSvgTag = `svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, 
        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, 
        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view`.replace(/\s+/g, '').split(",");
    }
    return cacheSvgTag.includes(str);
}

/**
 * 是否日期
 * @param {*} val 
 */
export const isDate = (val) => Object.prototype.toString.call(val) === '[object Date]';

/**
 * 是否emoji字符
 */
export const isEmoji = (val) => /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\ufe0f|\u200d|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(val);

/**
 * 是否车牌号
 * @param {*} val 
 */
export const isLicensePlate = val => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(val);

/**
 * 是否强密码，至少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param {*} val 
 */
export const isPwdStrength = val => /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(val);


/**
 * 是否ipv4
 * @param {*} val 
 */
export const isIPV4 = val => /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(val);

/**
是否ipv6
 */
export const isIPV6 = (val) => /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(val)


/**
 * 是否mac地址
 * @param {*} val 
 */
export const isMacAddress = val => /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(val);

/**
 * 是否URL地址
 * @param {*} val 
 */
export const isUrl = val => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(val);

/**
 * 是否X.Y.Z格式版本号
 * @param {*} val 
 */
export const isVersion = val => /^\d+(?:\.\d+){2}$/.test(val)

/**
 * 是否闰年
 * @param {*} year 
 */
export const isLeapYear = (year) => 0 === year % 4 && (year % 100 !== 0 || year % 400 === 0);