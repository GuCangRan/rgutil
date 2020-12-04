/**
 * window函数
 */

/**
 * 回到顶部,针对window整个页面的
 */
export const goToTop = (isAnimation = false) => {
    //直接到顶部
    if (isAnimation) {
        window.scrollTo(0, 0);
        return true;
    }
    //滚动到顶部
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
    return true;
}

/**
 * 某个具备class元素内置滚动轴回到顶部,只处理第一个
 */
export const goToTopClassName = (className) => {
    let el = document.getElementsByClassName(className);
    if (!el[0]) {
        throw (`未能找到class为 ${className} 的节点,请确认`)
    }
    el[0].scrollTo(0, 0);
};

/**
 * 某个具备id元素内置滚动轴回到顶部
 */
export const goToTopId = (id) => {
    let el = document.getElementById(id);
    if (!el) {
        throw (`未能找到id为 ${ID} 的节点,请确认`)
    }
    el.scrollTo(0, 0);
};

/**
 * 获取所选元素
 */
export const getSelectedText = () => window.getSelection().toString();


/**
 * 存储到localStorage 
 * 说明:对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param { String } key  属性
 * @param { string } value 值
 */
export const setLocalStorage = (key, value) => {
    if (typeof (value) === 'object') value = JSON.stringify(value);
    localStorage.setItem(key, value)
    return true;
};

/**
 * 读取localStorage存储值
 * @param {String} key  属性
 */
export const getLocalStorage = (key) => {
    return localStorage.getItem(key)
};


/**
 * 创建cookie
 * @param {*} key 
 * @param {*} value 
 * @param {*} expireHours 过期时间 默认24小时
 */
export const setCookie = (key, value, expireHours = 24) => {
    let path = "/";
    let date = Date.now() + expireHours * 24 * 60 * 60 * 1000; // cookie过期时间
    date = new Date(date).toUTCString();
    document.cookie = key + "=" + encodeURIComponent(value) + ((!expireHours) ? "" : ("; expires=" + date)) + ";path=" + path + ";";
    return true;
}

/**
 * 获取cookie
 * @param {*} key 
 */
export const getCookie = (key) => {
    let reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    let arr = document.cookie.match(reg);
    return arr ? arr[2] : null;
}

/**
 * 删除cookie
 * @param {*} key 
 */
export const delCookie = (key) => getCookie(key) ? setCookie(key, "", -1) : false;