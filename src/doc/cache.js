 /**
  * 缓存函数说明
  */
 const children = [{
         base: {
             name: "LRUCache",
             title: "LRU缓存处理",
             desc: `LRU缓存处理,超出容量范围时，删除一个'最近最少使用'缓存；如果键存在于缓存中，则获取键的值，否则返回 -1。
          参数: capacity 容量大小，Number类型，不存在返回-1
          示例:
          let cache = $R.LRUCache(2); // 2代表缓存容量; $R.LRUCache(capacity)每调用一次就产生一个新的缓存空间
          方法: 
           cache.put(key,value); //key:主键, value:对象值
           cache.get(key); //获取返回值,key:主键

          cache.put(1, 1);
          cache.put(2, 2);
          cache.get(1);       // 返回  1
          cache.put(3, 3);    // 该操作移除key=2,同时加入key=3缓存
          cache.get(2);       // 返回 -1 (未找到)
         `,
             parmInfo: "(capacity)",
             showDemo: false
         },
         demo: []
     },
     {
         base: {
             name: "LFUCache",
             title: "LFU缓存处理",
             desc: `LFUCache，当缓存达到其容量时，则应该在插入新项之前，使最不经常使用的项无效。在此问题中，当两个或更多个键具有相同使用频率时，去除'最久未使用'的键。
             如果键存在于缓存中，则获取键的值，否则返回 -1。
             参数: capacity 容量大小,Number类型
         示例:
         let cache = $R.LFUCache(2); // 2代表缓存容量 $R.LFUCache(capacity)每调用一次就产生一个新的缓存空间
         方法: 
          cache.put(key,value); //key:主键, value:对象值
          cache.get(key); //获取返回值,key:主键；不存在返回-1

          cache.put(1, 1);
          cache.put(2, 2);
          cache.get(1);      // 返回 1
          cache.put(3, 3);   // 去除键 2，并将key为3加入缓存
          cache.get(2);      // 返回 -1（未找到）
          cache.get(3);      // 返回 3
          cache.put(4, 4);   // 去除键 1
          cache.get(1);      // 返回 -1（未找到）
          cache.get(3);      // 返回 3
          cache.get(4);      // 返回 4
        `,
             parmInfo: "(capacity)",
             showDemo: false
         },
         demo: []
     }

 ]

 const docData = {
     title: {
         label: "缓存",
         value: "cache",
         expand: true,
         testValue: "",
         testResult: "",
         children: []
     },
     children: children
 }

 export default docData;