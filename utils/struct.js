/**结构类 */

import classEventEmitter from './struct/eventEmitter'
import classEventEmitterMap from './struct/eventEmitterMap'

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