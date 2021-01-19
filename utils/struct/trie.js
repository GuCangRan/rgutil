/**
 * trie树结构
 */

/**
 * 结构类型
 */
class TrieNode {
    constructor() {
        this.next = Object.create(null);
        this.isEnd = false;
    }
}

/**
 * trie树
 */
export default class Trie {
    constructor() {
        this.root = new TrieNode();
    };

    insert(word) {
        if (!word) return false;
        let node = this.root;
        for (let i = 0; i < word.length; ++i) {
            if (!node.next[word[i]]) {
                node.next[word[i]] = new TrieNode();
            }
            node = node.next[word[i]];
        }
        node.isEnd = true;
        return true;
    };

    inserts(wordsArray) {
        wordsArray.map(word => this.insert(word))
    }

    search(word) {
        if (!word) return false;
        let node = this.root;
        for (let i = 0; i < word.length; ++i) {
            if (node.next[word[i]]) {
                node = node.next[word[i]];
            } else {
                return false;
            }
        }
        return node.isEnd;
    };

    startsWith(prefix) {
        if (!prefix) return true;
        let node = this.root;
        for (let i = 0; i < prefix.length; ++i) {
            if (node.next[prefix[i]]) {
                node = node.next[prefix[i]];
            } else {
                return false;
            }
        }
        return true;
    };
}