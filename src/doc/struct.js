 /**
  * 结构函数说明
  */
 const children = [{
     base: {
         name: "eventEmitter",
         title: "发布订阅对象方式",
         desc: `
         发布订阅,缓存基于对象方式,即:{}
         发布-订阅模式其实是一种对象间一对多的依赖关系，
         当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。
 
         函数使用,测试如下:
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
     
         //1.常规写法
         let em = $R.eventEmitter();
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

         //2.链式写法
         ret = []; //清空数组
         em = $R.eventEmitter();
     
         em.on('event1', user1) // 订阅
             .on('event1', user2) // 订阅
             .on('event1', user3) // 订阅
             .off('event1', user2) // 取消user2方法的订阅
             .once('event2', user4) //执行一次
             .emit('event1', '发布-订阅模式') // 发布
             .emit('event1', '发布-订阅模式') // 发布
             .emit('event2', '执行一次') // 发布
             .emit('event2', '执行一次'); // 发布

        //清除全部注册内容
        em.clear();
        //两种方式,执行结果
        ret=[
            "user1订阅:发布-订阅模式",
            "user3订阅:发布-订阅模式",
            "user1订阅:发布-订阅模式",
            "user3订阅:发布-订阅模式",
            "user4订阅:执行一次"
            ]
         `,
         parmInfo: "()",
         showDemo: false
     },
     demo: []
 }, {
     base: {
         name: "eventEmitterMap",
         title: "发布订阅Map方式",
         desc: `
         发布订阅,缓存基于Map结构存储
         用法同eventEmitter,记得复制上面代码改掉函数名字哦
        `,
         parmInfo: "()",
         showDemo: false
     },
     demo: []
 }]

 const docData = {
     title: {
         label: "结构",
         value: "struct",
         expand: true,
         testValue: "",
         testResult: "",
         children: []
     },
     children: children
 }

 export default docData;