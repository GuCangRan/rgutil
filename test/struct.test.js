import * as fun from '../utils/struct'

test('eventEmitter', () => {

    let ret = []; //临时存储数组
    function user1(content) {
        ret.push("user1订阅:" + content)
    }

    function user2(content) {
        ret.push("user2订阅:" + content)
    }

    function user3(content) {
        ret.push("user3订阅:" + content)
    }

    function user4(content) {
        ret.push("user4订阅:" + content)
    }

    //1.常规写法,下面还有链式写法
    let em = fun.eventEmitter();
    // 订阅
    em.on('event1', user1);
    em.on('event1', user2);
    em.on('event1', user3);

    // 取消user2方法的订阅
    em.off('event1', user2);
    //执行一次
    em.once('event2', user4)

    // 发布
    em.emit('event1', '发布-订阅模式');
    em.emit('event1', '发布-订阅模式');
    em.emit('event2', '执行一次');
    em.emit('event2', '执行一次');

    expect(ret).toEqual([
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user4订阅:执行一次"
    ])


    //2.链式写法
    ret = []; //清空数组
    em = fun.eventEmitter();

    em.on('event1', user1) // 订阅
        .on('event1', user2) // 订阅
        .on('event1', user3) // 订阅
        .off('event1', user2) // 取消user2方法的订阅
        .once('event2', user4) //执行一次
        .emit('event1', '发布-订阅模式') // 发布
        .emit('event1', '发布-订阅模式') // 发布
        .emit('event2', '执行一次') // 发布
        .emit('event2', '执行一次'); // 发布

    expect(ret).toEqual([
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user4订阅:执行一次"
    ])

})


test('eventEmitterMap', () => {

    let ret = []; //临时存储数组
    function user1(content) {
        ret.push("user1订阅:" + content)
    }

    function user2(content) {
        ret.push("user2订阅:" + content)
    }

    function user3(content) {
        ret.push("user3订阅:" + content)
    }

    function user4(content) {
        ret.push("user4订阅:" + content)
    }

    //1.常规写法,下面还有链式写法
    let em = fun.eventEmitterMap();
    // 订阅
    em.on('event1', user1);
    em.on('event1', user2);
    em.on('event1', user3);

    // 取消user2方法的订阅
    em.off('event1', user2);
    //执行一次
    em.once('event2', user4)

    // 发布
    em.emit('event1', '发布-订阅模式');
    em.emit('event1', '发布-订阅模式');
    em.emit('event2', '执行一次');
    em.emit('event2', '执行一次');

    expect(ret).toEqual([
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user4订阅:执行一次"
    ])


    //2.链式写法
    ret = []; //清空数组
    em = fun.eventEmitterMap();

    em.on('event1', user1) // 订阅
        .on('event1', user2) // 订阅
        .on('event1', user3) // 订阅
        .off('event1', user2) // 取消user2方法的订阅
        .once('event2', user4) //执行一次
        .emit('event1', '发布-订阅模式') // 发布
        .emit('event1', '发布-订阅模式') // 发布
        .emit('event2', '执行一次') // 发布
        .emit('event2', '执行一次'); // 发布

    expect(ret).toEqual([
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user1订阅:发布-订阅模式",
        "user3订阅:发布-订阅模式",
        "user4订阅:执行一次"
    ])

})



test('sensitiveWords', () => {
    const sw = fun.sensitiveWords();
    //追加敏感词
    sw.addWords(['唐僧', '孙悟空', '猪八戒']);
    sw.addWord('玉帝哥哥');

    let value = "我爱唐僧哥哥";
    //检测敏感词
    expect(sw.containsDfa(value)).toEqual(true);
    expect(sw.wordsDfa(value)).toEqual(['唐僧']);

    value = "唐僧念紧箍咒,孙悟空要打唐僧,猪八戒看不懂";
    expect(sw.containsDfa(value)).toEqual(true);
    expect(sw.wordsDfa(value)).toEqual(['唐僧', '孙悟空', '唐僧', '猪八戒']);

    value = "我爱嫦娥姐姐"
    expect(sw.containsDfa(value)).toEqual(false);
    expect(sw.wordsDfa(value)).toEqual([])

    //检测敏感词替换
    value = "我不是玉帝哥哥,就是个干滴滴的弟弟"
    expect(sw.replaceDfa(value, '*', true)).toEqual("我不是*,就是个干滴滴的弟弟")
    expect(sw.replaceDfa(value, '*', false)).toEqual(
        "我不是****,就是个干滴滴的弟弟"
    )
})


test('trie', () => {
    let trie = fun.trie();
    //追加敏感词
    trie.inserts(['唐僧', '孙悟空', '猪八戒']);
    trie.insert('玉帝哥哥');
    //检测词语
    expect(trie.search("唐僧")).toEqual(true);
    expect(trie.search("唐僧你")).toEqual(false);
    expect(trie.startsWith("唐")).toEqual(true);
    expect(trie.startsWith("唐长老")).toEqual(false);

})