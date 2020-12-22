/**
 * 加密相关
 */

import Md5Encrypt from './encryption/md5'
import Base64 from './encryption/base64'

/**
 * md5加密
 */
export const md5 = Md5Encrypt;

/**
 * base64编码
 */
export const base64Encode = Base64.encode;
/**
 * base64解码
 */
export const base64Decode = Base64.decode;