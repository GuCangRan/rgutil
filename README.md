# rgutil前端工具库
`
github仓库地址: https://github.com/GuCangRan/rgutil

rtuils默认以$R命名开头
```
1) $R是基于ES6语法设计的函数库
2) $R支持按需加载
3) $R可自行下载源码拷贝自行需要方法,函数尽量保持独立
4) $支持页面直接引用
```

# 文档地址
https://gucangran.github.io/rutils/

# 资源在线下载
https://cdn.jsdelivr.net/gh/GuCangRan/rutils@latest/dist/

说明: rgutil支持页面直接引用使用,操作如下

```javascript
//立即执行函数直接引用
<script src="rutil.js"></script>
//或 引用 <script src="../dist/rutil.umd.js"></script>
 <script>
  let isNumber = $R.isNumber(8);
  console.log(isNumber)
 </script>

//ES6模块引用文件方式
<script type="module">
  import * as $R from '../dist/rutil.esm.js'
  let isNumber = $R.isNumber(8);
  console.log(isNumber)
</script>

```




# npm下载

npm install rgutil

```javascript
//函数全部导入
import * as $R from "rgutil/utils/main.js";

代码写法:
 $R.isNumber(8)


//按需导入
import { isNumber } from "rgutil/utils/main.js";

//操代码写法
 isNumber(8)

```







# 给作者一点氧气,缓解心脏和发型


![zhifubao](src/assets/zhifubao.png)![weixin](src/assets/weixin.png)

