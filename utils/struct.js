/**结构类 */

import classEventEmitter from './struct/eventEmitter'
import classEventEmitterMap from './struct/eventEmitterMap'
import classSensitiveWords from './struct/sensitive-words'
import classTrie from './struct/trie'

/**
 * 发布订阅,对象缓存模式
 */
export const eventEmitter = () => {
    return new classEventEmitter();
}

/**
 * 发布订阅,Map缓存方式
 */
export const eventEmitterMap = () => {
    return new classEventEmitterMap();
}

/**
 * 敏感词处理,DFA算法
 */
export const sensitiveWords = () => {
    return new classSensitiveWords();
}

/**
 * trie算法
 */
export const trie = () => {
    return new classTrie();
}