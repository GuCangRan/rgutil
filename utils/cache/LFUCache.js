/**
 * LFU缓存算法
 */
export default class LFUCache {
    constructor(capacity) {
        this.size = capacity
        this.values = new Map()
        this.times = new Map()
    }

    get(key) {
        if (this.values.has(key)) {
            let val = this.values.get(key) || 0
            let time = this.times.get(key) || 0
            this.values.delete(key)
            this.times.delete(key)
            this.values.set(key, val)
            this.times.set(key, time + 1)
            return val
        }
        return -1
    }

    put(key, value) {
        if (this.size <= 0) return;
        let time = 1
        let min = Math.min(...this.times.values())
        if (this.values.has(key)) {
            time = (this.times.get(key) || 0) + 1
            this.values.delete(key)
            this.times.delete(key)
        }
        this.values.set(key, value)
        this.times.set(key, time)

        if (this.size < this.values.size) {
            let it = this.values.keys()
            let delKey = it.next().value
            while (delKey && this.times.get(delKey) !== min) {
                delKey = it.next().value
            }
            this.values.delete(delKey)
            this.times.delete(delKey)
        }
    }
    clear() {
        this.values.clear();
        this.times.clear();
    }
}