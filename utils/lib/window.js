/**
 * window函数
 */

/**
 * 回到顶部
 */
export const goToTop = () => window.scrollTo(0, 0);

/**
 * 获取所选元素
 */
export const getSelectedText = () => window.getSelection().toString();