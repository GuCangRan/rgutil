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
export const goToTopId = (id, isAnimation = false) => {
    let el = document.getElementById(id);
    if (!el) {
        throw (`未能找到id为 ${ID} 的节点,请确认`)
    }

    if (isAnimation) {
        el.scrollIntoView({
            behavior: 'smooth'
        })
        return;
    }

    if (el.scrollIntoView) {
        el.scrollIntoView();
    } else if (el.scrollIntoViewIfNeeded) {
        el.scrollIntoViewIfNeeded();
    }
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
export const getLocalStorage = (key) => localStorage.getItem(key);


/**
 * 删除localStorage存储值
 * @param {String} key  属性
 */
export const delLocalStorage = (key) => localStorage.removeItem(key);

/**
 * 增加sessionStorage值
 * @param {*} key 
 * @param {*} value 
 */
export const setSessionStorage = (key, value) => sessionStorage.setItem(key, value);

/**
 * 读取sessionStorage值
 * @param {*} key 
 */
export const getSessionStorage = (key) => sessionStorage.getItem(key);
/**
 * 删除sessionStorage值
 * @param {*} key 
 */
export const delSessionStorage = (key) => sessionStorage.removeItem(key);


/**
 * 创建cookie
 * @param {*} key 
 * @param {*} value 
 * @param {*} expireHours 过期时间 默认24小时
 */
export const setCookie = (key, value, expireHours = 24) => {
    let path = "/";
    let date = Date.now() + expireHours * 60 * 60 * 1000; // cookie过期时间
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

/**
 * 获取页面可视高度
 */
export const pageViewHeight = () => {
    let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientHeight;
}

/**
 * 获取页面可视宽度
 */
export const pageViewWidth = () => {
    let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientWidth;
}


/**
 * 获取滚动轴位置
 * @param {*} el 
 */
export const scrollPostion = (el = window) =>
    ({
        x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
        y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    });

/**
 * 复制文本
 * @param {*} str 
 */
export const copyText = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.style.top = "-9999px";
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ?
        document.getSelection().getRangeAt(0) :
        false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
    return true;
}

/**
 * 进入全屏
 * @param {*} selector 
 */
export const fullScreen = (selector = document.body) => {
    if (selector.requestFullscreen) {
        selector.requestFullscreen();
    } else if (selector.mozRequestFullScreen) {
        selector.mozRequestFullScreen();
    } else if (selector.webkitRequestFullscreen) {
        selector.webkitRequestFullscreen();
    } else if (selector.msRequestFullscreen) {
        selector.msRequestFullscreen();
    }
    //return true;
};

/**
 * 退出全屏
 */
export const exitFullscreen = () => {
    if (document.exitFullScreen) {
        document.exitFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    //return true;
}

/**
 * 是否全屏状态
 */
export const isFullScreen = () => {
    return !!(
        //document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
    );
}