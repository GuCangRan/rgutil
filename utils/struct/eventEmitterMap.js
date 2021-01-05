/**
 * 发布订阅,基于Map实现
 */
export default class eventEmitterMap {

    constructor() {
        this.map = new Map();
    }

    /**
     * 订阅
     * @param {*} event 事件名称
     * @param {*} fn   订阅函数
     */
    on(event, fn) {

        if (!(fn instanceof Function)) {
            throw new Error("注册fn必须是一个函数")
        }

        if (!this.map.get(event)) {
            this.map.set(event, []);
        }
        this.map.get(event).push(fn);
        return this;
    }

    /**
     * 监听一次
     * @param {*} event 
     * @param {*} fn 
     */
    once(event, fn) {
        const on = (...rest) => {
            this.off(event, on);
            fn.apply(this, rest);
        }
        on.fn = fn;
        this.on(event, on);

        return this;
    }

    /**
     * 取消订阅
     * @param {*} event 事件名称
     * @param {*} fn   订阅函数
     */
    off(event, fn) {
        //如果缓存中不存在对应事件,直接返回
        if (!this.map.get(event)) return this;

        //如果不传递fn,说明要清空此事件中全部函数
        if (!fn) {
            this.map.set(event, []);
            return this;
        }
        //如果传递fn,过滤所有不为fn (一个事件可以注册多个fn,所以全都过滤)
        this.map.set(event, this.map.get(event).filter(item => item !== fn && item.fn !== fn));

        return this;
    }

    /**
     * 发布
     */
    emit(...rest) {
        let event = rest.shift() || ""; //获取第一个元素,并移除第一个
        let fns = this.map.get(event);
        if (!fns || fns.length === 0) {
            return this;
        }

        //遍历函数
        fns.forEach(fn => {
            fn.apply(this, rest);
        });
        return this;
    }

    /**
     * 清除所有注册内容
     */
    clear() {
        this.map.clear();
    }

}