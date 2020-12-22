/**
 * LRU缓存算法
 */
export default class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }
    get(k) {
        if (!this.cache.has(k)) return -1

        const v = this.cache.get(k)

        this.cache.delete(k)
        this.cache.set(k, v)

        return v
    }
    put(k, v) {
        if (this.size <= 0) return;
        if (this.cache.has(k)) this.cache.delete(k)

        this.cache.set(k, v)

        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value)
        }
    }

    clear() {
        this.cache.clear();
    }
}