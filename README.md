# rgutil前端ES6工具库

github仓库地址: https://github.com/GuCangRan/rgutil

**特别说明**:很多函数借用了很多大神的开源文章和部分面试题,以及自己平时需要用到的,进行整理合成,希望函数工具能够整合很多的场景,而又保持独立函数特性,便于开发者直接引用,非常感谢这些大神的付出,致敬,这也是我自己的一个学习过程

rgutil默认以$R命名开头
```
1) $R是基于ES6语法设计的函数库
2) $R支持按需加载
3) $R可自行下载源码拷贝自行需要方法,函数尽量保持独立
4) $支持页面直接引用
```

# 文档地址
 https://gucangran.github.io/rgutil/

# 资源在线下载
在github源码dist文件夹,可自行下载

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
npm install rgutil

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

