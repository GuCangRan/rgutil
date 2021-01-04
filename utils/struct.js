/**结构类 */

import classEventEmitter from './struct/eventEmitter'

/**
 * 发布订阅
 */
export const eventEmitter = () => {
    return new classEventEmitter();
}