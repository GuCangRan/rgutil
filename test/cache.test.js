import * as fun from '../utils/cache'

test('LRUCache', () => {

    const cache = fun.LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);

    expect(cache.get(1)).toEqual(1)
    cache.put(3, 3); // 该操作移除key=2,同时加入key=3缓存
    expect(cache.get(2)).toEqual(-1) //获取2找不到为-1
})

test('LFUCache', () => {

    const cache = fun.LFUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toEqual(1) // 返回 1
    cache.put(3, 3); // 去除键 2，并将key为3加入缓存
    expect(cache.get(2)).toEqual(-1) // 返回 -1（未找到）
    expect(cache.get(3)).toEqual(3) // 返回 3
    cache.put(4, 4); // 去除键 1
    expect(cache.get(1)).toEqual(-1); // 返回 -1（未找到）
    expect(cache.get(3)).toEqual(3); // 返回 3
    expect(cache.get(4)).toEqual(4); // 返回 4

})