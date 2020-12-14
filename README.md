# rgutil前端ES6工具库

github仓库地址: https://github.com/GuCangRan/rgutil

码云仓库地址:    https://gitee.com/gucangran/rgutil
# 文档地址
 https://gucangran.github.io/rgutil/

 或

 http://gucangran.gitee.io/rgutil


>1. $R是基于ES6函数库，简洁到能用一行就一行的强迫症设计，依然考虑阅读性，毕竟给人类看的，顺便机器运行
>2. $R函数基本保持独立，让您满足单独可复制自己所需方法，没有套娃地狱的写法
>3. $R支持npm下载，Tree-shaking按需加载，只给你想要的
>4. $R支持单页面直接脚本引用，立即执行函数方式，umd方式，es6方式任您选
>5. $R文档支持在线大多数方法直接测试结果，就是图个方便，不香么
>6. $R默认打包es6语法，毕竟大势所趋，可更改.babelrc中注释内容去打包支持<es6版本
>7. $R采纳jest进行单元测试，可看测试报告
>8. $R是默认命名，可修改package.json中utilName再打包，用你喜欢的


# npm下载

执行npm指令
```javascript
npm install rgutil
```

```javascript
//1. 函数全部导入
import * as $R from "rgutil";

//代码写法:
 $R.isNumber(8)


//2. 按需导入
import { isNumber } from "rgutil";

//操代码写法
 isNumber(8)

```

# 页面使用

>打包后脚本在dist文件夹，自行下载

```javascript
//纯html页面直接引用
//1. 立即执行函数直接引用
<script src="rgutil.js"></script>
//或 引用 <script src="rgutil.umd.js"></script>
 <script>
  let isNumber = $R.isNumber(8);
  console.log(isNumber)
 </script>

//2. ES6模块引用文件方式
<script type="module">
  import * as $R from 'rutil.esm.js'
  let isNumber = $R.isNumber(8);
  console.log(isNumber)
</script>

```

**特别说明：** 本函数库借鉴了很多大神的开源文章和部分面试题，以及自己平时所用，汇总合成。非常感谢这些大神的付出，致敬！这也是自己的一个学习过程，为开源贡献一份微薄之力。
  
   