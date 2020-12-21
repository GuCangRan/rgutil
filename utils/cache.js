/**缓存类 */

import classLRUCache from './cache/LRUCache'
import classLFUCache from './cache/LFUCache'

/**
 * LRU缓存
 * @param {*} capacity 
 */
export const LRUCache = (capacity) => {
    return new classLRUCache(capacity);
}

/**
 * LFU缓存
 * @param {*}} capacity 
 */
export const LFUCache = (capacity) => {
    return new classLFUCache(capacity);
}