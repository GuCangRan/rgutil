//参考代码: https://github.com/alex-my/egg-full-sensitivewords 感谢作者的源码

/**
 * DFA 算法
 * 敏感词库
 */

class DfaMap {
    constructor() {
        this._maps = {};
    }

    get words() {
        return this._maps;
    }

    /**
     * 构建敏感词词库
     * @param {Array} words : ['word', ...]
     */
    addToHashMap(words) {
        /**
         * words: ["王八蛋", "王八羔子"] 构成以下内容
         *
         * 王 -> 八 -> 蛋
         *         -> 羔  -> 子
         *
         * JSON解析: https://www.keylala.cn
         * {
         *   "王": {
         *     "isEnd": 0,
         *     "八": {
         *         "isEnd": 0,
         *         "蛋": {
         *             "isEnd": 1
         *         },
         *         "羔": {
         *            "isEnd": 0,
         *            "子": {
         *                "isEnd": 1
         *             }
         *           }
         *         }
         *     }
         * }
         */
        let key = null;
        let keyChar = null;
        let wordMap = null;
        let newMap = null;
        let nowMap = null;
        for (let i = 0; i < words.length; i++) {
            nowMap = this._maps;
            // key 敏感字 (eg: 王八蛋)
            key = words[i];
            // 给每个敏感词语构造一棵树
            for (let j = 0; j < key.length; j++) {
                // 取出该敏感词语的每个词 (eg: 王)
                keyChar = key[j];
                // 敏感词库中是否已经有该词，(eg: 以'王'为起始点的树)
                wordMap = nowMap[keyChar];
                // 如果词库中存在该词，存在以它为首的这棵树，则接下来，用这颗树继续往下编
                if (wordMap) {
                    nowMap = wordMap;
                } else {
                    // 没有，则以它为起点，构造一颗新树
                    newMap = {};
                    // 不是最后一个
                    newMap.isEnd = 0;
                    // 添加新树 (实际添加到了 this._maps) 中
                    nowMap[keyChar] = newMap;
                    // 后续使用这颗新树
                    nowMap = newMap;
                }
                if (j === key.length - 1) {
                    nowMap.isEnd = 1;
                }
            }
        }
    }
}

/**
 * 敏感词处理算法逻辑
 */
export default class SensitiveWords {
    constructor() {
        this.dfaMap = new DfaMap();
    }
    /**
     * 加载敏感字集合，一般用于服务器启动时添加
     * @param {Array} words : ['word', ...]
     */
    addWords(words) {
        this.dfaMap.addToHashMap(words);
    }

    /**
     * 新增敏感字
     * @param {string} word
     */
    addWord(word) {
        this.addWords([word]);
    }

    /**
     * 给定的字符串是否包含敏感字, DFA 算法
     * @param {string} content
     */
    containsDfa(content) {
        let result = false;
        for (let i = 0; i < content.length; i++) {
            if (this._checkByDfa(content, i) > 0) {
                result = true;
                break;
            }
        }
        return result;
    }

    /**
     * 获取给定的字符串包含的敏感词语, DFA 算法
     * @param {string} content
     */
    wordsDfa(content) {
        const l = [];
        for (let i = 0; i < content.length; i++) {
            const index = this._checkByDfa(content, i);
            if (index > 0) {
                l.push(content.substring(i, i + index));
                i = i + index - 1; // i++ 跳过已检查的内容
            }
        }
        return l;
    }

    /**
     * 用 separator 替换 content
     * @param {string} content
     * @param {string} separator
     * @param {bool} once:
     *              true: 对敏感字值替换一次，比如 王八蛋 -> *,
     *              false: 敏感字中含有多少字就替换多少次 王八蛋 -> ***
     */
    replaceDfa(content, separator = '*', once = false) {
        let newContent = content;
        const l = this.wordsDfa(content);
        for (let i = 0; i < l.length; i++) {
            const words = l[i];
            // 获取替换的文本
            const replaceWords = this._replaceWords(separator, words.length, once);
            newContent = newContent.replace(new RegExp(words, 'g'), replaceWords);
        }
        return newContent;
    }

    /**
     * 检测是否包含敏感字，DFA
     * @param {string} content
     * @param {int} begin
     * @return {int}
     */
    _checkByDfa(content, begin) {
        let matchFlag = 0;
        let isEnd = false;
        let nowMap = this.dfaMap.words;
        let word = null;
        for (let i = begin; i < content.length; i++) {
            word = content[i];
            // 查找 nowMap 中是否有以 word 为起点的树
            nowMap = nowMap[word];
            if (nowMap !== undefined) {
                matchFlag++;
                // 为 1 表示该树到了终点
                if (nowMap.isEnd === 1) {
                    isEnd = true;
                    break;
                }
            } else {
                // 没找到 (eg: 没有找到 王 开头的树)，直接返回了
                break;
            }
        }

        if (!isEnd) {
            // isEnd = false, 表示只匹配了部分，比如 他是王八，只匹配到了 王八，不符合条件
            matchFlag = 0;
        }

        return matchFlag;
    }

    _replaceWords(separator, length, once) {
        if (once) {
            return separator;
        }
        return new Array(length + 1).join(separator);
    }
}