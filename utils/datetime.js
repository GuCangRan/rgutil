/**
 * 日期函数
 */

/**
 * 获取格式化日期
 * @param {*} valueFormat 
 * @param {Date} dateTime 
 */
export const dateFormat = (valueFormat, dateTime = new Date()) => {
    let dt = new Date(dateTime.getTime()); //重置日期对象,不改变传入日期对象
    //let dtNow = new Date(+new Date() + 8 * 3600 * 1000).toISOString().split(/[^0-9]/).slice(0, -1);
    dt.setHours(dt.getHours() + 8); //增加八个小时,否则会差8个小时时区
    let [y4, M2, d2, H2, m2, s2, f3] = dt.toISOString().split(/[^0-9]/).slice(0, -1);
    let dateObj = {
        "yyyy": y4,
        "yyy": y4.substring(1, 4),
        "yy": y4.substring(2, 4),
        "MM": M2,
        "M": parseInt(M2),
        "dd": d2,
        "d": parseInt(d2),
        "HH": H2,
        "H": parseInt(H2),
        "mm": m2,
        "m": parseInt(m2),
        "ss": s2,
        "s": parseInt(s2),
        "fff": f3,
        "ff": parseInt(f3),
        "f": parseInt(f3)
    }
    return valueFormat.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g, (key) => {
        return dateObj[key];
    })

}

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

/**
 * 获取某年某月的天数
 * @param {*} year 
 * @param {*} month 
 */
export const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

/**
 * 获取指定日期的周几-英文
 * @param {*} date 
 */
export const weekDayEnglish = date => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];

/**
 * 获取指定日期的周几-汉语
 * @param {*} date 
 */
export const weekDayChinese = date => ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()];


/**
 * 获取指定日期是几月-英文
 * @param {*} date 
 */
export const monthNameEnglish = date => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'][date.getMonth()];

/**
 * 获取指定日期是几月-汉语
 * @param {*} date 
 * @param {*} isNum 
 */
export const monthNameChinese = (date, isNum = true) => {
    return isNum ?
        ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'][date.getMonth()] :
        ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][date.getMonth()];
}