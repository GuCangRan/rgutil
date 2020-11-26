/**
 * 日期雷函数
 * @param {*} date 
 * @param {*} otherDate 
 */

/**
 * 计算两个日期之间的差异天数
 * @param {*} date 
 * @param {*} otherDate 
 */
export const daysDiff = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

/**
 * 计算两个日期之间的月数
 * @param {*} startDate 
 * @param {*} endDate 
 */
export const monthDiff = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

/**
 * 日期获取一年中的哪一天
 * @param {*} date 2
 */
export const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));