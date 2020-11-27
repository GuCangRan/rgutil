/**
 * window函数
 */

/**
 * 回到顶部,针对window整个页面的
 */
export const goToTop = () => window.scrollTo(0, 0);

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