# rgutil前端ES6工具库

github仓库地址: https://github.com/GuCangRan/rgutil

码云仓库地址:    https://gitee.com/gucangran/rgutil
# 文档地址
 https://gucangran.github.io/rgutil/

 或

 http://gucangran.gitee.io/rgutil


rgutil默认以$R命名开头,您也可根据package.json中utilName改为别的名称进行打包

您也可以更改.babelrc中注释内容支持es6以下版本的兼容,默认打包es6,毕竟大势所趋,任尔等东南西北风
```
1) $R是基于ES6语法设计的函数库,简洁到能用一行就一行的强迫症设计,当然还是要考虑阅读性的,毕竟给人类看的,顺便机器运行下
2) $R函数基本保持独立,让您满足单独可复制自己所需方法,没有各种套娃的写法
3) $R支持按npm方式按需加载,减少您的打包体积,只给你想要的
4) $R支持单页面直接脚本引用,立即执行函数方式,umd方式,es6方式任您选
```


# 资源在线下载
打包脚本文件放在dist文件夹,可自行下载直接使用,或自行编译源码打包

说明: rgutil支持页面直接引用使用,操作如下

```javascript
//立即执行函数直接引用
<script src="rgutil.js"></script>
//或 引用 <script src="rgutil.umd.js"></script>
 <script>
  let isNumber = $R.isNumber(8);
  console.log(isNumber)
 </script>

//ES6模块引用文件方式
<script type="module">
  import * as $R from 'rutil.esm.js'
  let isNumber = $R.isNumber(8);
  console.log(isNumber)
</script>

```




# npm下载

执行npm指令
```javascript
npm install rgutil
```

```javascript
//函数全部导入
import * as $R from "rgutil";

//代码写法:
 $R.isNumber(8)


//按需导入
import { isNumber } from "rgutil";

//操代码写法
 isNumber(8)

```


# 给作者一点氧气，缓解心脏和发型，感谢有您的支持和鼓励


**特别说明**:很多函数借用了很多大神的开源文章和部分面试题,以及自己平时需要用到的,进行整理合成,希望函数工具能够整合很多的场景,而又保持独立函数特性,便于开发者直接引用,非常感谢这些大神的付出,致敬,这也是我自己的一个学习过程