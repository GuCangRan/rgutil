<template>
  <div class="doc-main">
    <div class="doc-nav">
      <div class="search-wrapper">
        <input
          type="text"
          v-model="search"
          :placeholder="verison"
          class="search-input serarch-position"
        />
      </div>

      <div v-for="(group, index) in listDoc" :key="index">
        <div
          v-if="group.children.length > 0"
          @click="group.expand = !group.expand"
          class="doc-title"
          :style="index == 0 ? 'margin-top:40px' : ''"
        >
          {{ group.label }}
        </div>

        <div v-show="group.expand">
          <div
            v-for="(item, index) in group.children"
            :key="index"
            @click="goToScrollPostion(item)"
            class="doc-child"
          >
            <div>{{ item.name }}</div>
            <div>{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-container">
      <div v-for="(group, index) in listDoc" :key="index">
        <div
          v-for="(item, index) in group.children"
          :id="item.name"
          :key="index"
          class="doc-desc"
        >
          <div class="doc-desc-name">{{ item.name }} {{ item.parmInfo }}</div>
          <div>
            <pre class="pre-desc">{{ item.desc }}</pre>
          </div>
          <!-- 自测试函数处理 -->
          <div class="test-demo" v-if="item.showDemo || item.showDemo != false">
            <div v-if="item.testmode && item.testmode == 'button'">
              武德至上 ：
              <input
                type="text"
                v-model="item.testValue"
                class="search-input"
                placeholder=" 输入函数中实参即可，多个参数英文逗号隔开"
              />
              <button class="test-button" @click="inputResult(item)">
                测试走你
              </button>
            </div>
            <div v-else>
              武德至上 ：
              <input
                type="text"
                v-model="item.testValue"
                @input="inputResult(item)"
                class="search-input"
                placeholder=" 输入函数中实参即可，多个参数英文逗号隔开"
              />
            </div>
            <div v-if="item.testResult && item.testResult.length > 0">
              <pre
                ref="pre"
                class="language-css"
                v-html="
                  Prism.highlight(
                    item.testResult,
                    Prism.languages.javascript,
                    'javascript'
                  )
                "
              ></pre>
            </div>
          </div>
          <pre
            ref="pre"
            class="language-css"
            v-for="(demoValue, dindex) in codeDemoList(item.name)"
            :key="dindex"
            v-html="
              Prism.highlight(
                testCodeFunc(item.name, demoValue),
                Prism.languages.javascript,
                'javascript'
              )
            "
          ></pre>
        </div>
      </div>
      <div class="heart-desc">
        喜欢就给作者一点氧气，您的氧气让作者可以面向宇宙编程，放飞发型
      </div>
      <div id="myMoney" class="money-img">
        <div v-show="tobottom == 0">
          <img src="../assets/weixin.png" />
        </div>
        <div v-show="tobottom == 0">
          <img src="../assets/zhifubao.png" />
        </div>
      </div>
    </div>
    <div class="top-title" v-if="rightTop" @click="goTop">
      <KittyTop />
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "/@modules/prismjs/themes/prism.css";
import * as $R from "../../index.js";
import docData from "./../doc/index.js";
import KittyTop from "./KittyTop.vue";

import { reactive, ref, toRef, toRefs, computed, watch, onMounted } from "vue";
export default {
  name: "BookDoc",
  components: {
    KittyTop,
  },
  props: {
    tobottom: Number,
  },
  setup(props) {
    let myDoc = docData();
    let docTree = myDoc.docTree;
    let docMapDemo = myDoc.docMapDemo;
    const verison = ref(`  找找看 ${docMapDemo.size} 个API  ${$R.version}`);
    //console.log(docTree);
    const coneDocTree = JSON.parse(JSON.stringify(docTree));
    const search = ref("");
    const doc = reactive({ doc: coneDocTree });

    //快速查询过滤树形结构显示
    const listDoc = computed(() => {
      return doc.doc.filter((item, index) => {
        return (item.children = docTree[index].children.filter((child) => {
          return (
            child.name.toLowerCase().indexOf(search.value.toLowerCase()) >= 0 ||
            child.title.toLowerCase().indexOf(search.value.toLowerCase()) >=
              0 ||
            child.desc.toLowerCase().indexOf(search.value.toLowerCase()) >= 0
          );
        }));
      });
    });

    //代码示例从map中读取出来,界面用于循环
    const codeDemoList = computed(() => {
      return function (funcName) {
        let parms = docMapDemo.get(funcName);
        if (!parms) return [];
        //console.log("parms", parms);
        return parms;
      };
    });

    //测试demo示例函数
    const testCodeFunc = computed(() => {
      return function (funcName, demoValue) {
        if (!$R[funcName]) {
          return `$R.${funcName}函数未能找到, 请确认文档是否正确`;
        }
        try {
          //检测是否特殊的传参类型,则用特殊用法
          if (demoValue?.parms && demoValue?.desc) {
            const ret = $R[funcName].apply($R, demoValue.parms);
            return `$R.${funcName}(${demoValue.desc})  //${toString(ret)}`;
          }

          if (demoValue?.parmMore) {
            const ret = $R[funcName].apply($R, demoValue.parmMore);
            return `$R.${funcName}(${demoValue.parmMore})  //${toString(ret)}`;
          }

          //常规对象的执行测试样例
          const ret = $R[funcName].apply($R, [demoValue]);
          //const ret = $R[funcName](...[demoValue]);
          return `$R.${funcName}(${toString(demoValue)})  //${toString(ret)}`;
        } catch (error) {
          //console.error(error);
          return `$R.${funcName}(${demoValue})发生异常,原因:${error}`;
        }
      };
    });

    //在线直接输入传参,可直接测试结果
    const inputResult = function (item) {
      if (item.testValue == "") {
        item.testResult = "";
        return;
      }

      try {
        const ret = eval(`$R['${item.name}'].apply($R, [${item.testValue}]);`);
        item.testResult = `测试函数: $R.${item.name}(${
          item.testValue
        })  //测试结果: ${toString(ret)}`;
      } catch (error) {
        //console.error(error);
        item.testResult = `$R.${item.name}(${item.testValue})发生异常,原因:${error}`;
      }
    };

    //点击左侧函数,右侧滚动轴位置定位
    const goToScrollPostion = (item) => {
      const elem = document.getElementById(item.name);
      if (elem && elem.scrollIntoView) {
        elem.scrollIntoView();
      } else if (elem && elem.scrollIntoViewIfNeeded) {
        elem.scrollIntoViewIfNeeded();
      }
    };

    let tobottom = ref(0);
    watch(
      () => props.tobottom,
      () => {
        tobottom.value = props.tobottom % 2;
        goToScrollPostion({ name: "myMoney" });
      }
    );

    let rightTop = ref(false);
    onMounted(() => {
      document.addEventListener(
        "scroll",
        () => {
          try {
            let Top = document.getElementsByClassName("doc-container")[0]
              .scrollTop;
            rightTop.value = Top > 10 ? true : false;
          } catch (error) {}
        },
        true
      );
    });
    const goTop = () => {
      $R.goToTopClassName("doc-container");
    };

    return {
      Prism,
      search,
      goToScrollPostion,
      testCodeFunc,
      listDoc,
      codeDemoList,
      inputResult,
      props,
      tobottom,
      rightTop,
      goTop,
      verison,
    };
  },
};

/**
  将常规函数对象转换为string类型
*/
function toString(val) {
  return val === undefined
    ? "undefined"
    : val === null
    ? "null"
    : // : val instanceof RegExp
    // ? val
    typeof val === "object"
    ? JSON.stringify(val, null)
    : typeof val === "number"
    ? String(val)
    : typeof val === "boolean"
    ? String(val)
    : val == ""
    ? String(val)
    : '"' + String(val) + '"';
  //? JSON.stringify(val, null, 2)
}
</script>
<style lang="scss">
.doc-main {
  height: 100%;
  display: grid;
  grid-template-columns: 390px 1fr;

  .doc-nav {
    // border: 1px solid rebeccapurple;
    overflow: auto;
    background: #fffffd;
  }

  .doc-container {
    // border: 1px solid green;
    overflow: auto;
    background: #fffffd;
  }
}
.pre-desc {
  font-size: 18px;
}

.search-wrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.search-input {
  width: 90%;
  height: 36px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin: 5px 0;
}
.serarch-position {
  top: 45px;
  position: fixed;
  left: 15px;
  width: 360px;
}

.search-input:focus {
  border-color: #66afe9;
  outline: 0;
  box-shadow: inset 0 0 1px #00000013, 0 0 8px #76bbed;
}

.doc-title {
  font-size: 18px;
  margin-top: 15px;
  padding: 5px 5px 5px 5px;
  font-weight: bold;
  border-left: 3px solid #66afe9;
  color: #66afe9;
}

.doc-child {
  font-size: 16px;
  height: 23px;
  padding: 4px 15px;
  margin: 3px 0;
  display: grid;
  grid-template-columns: 180px 1fr;
  cursor: Pointer;
  background: #fffffd;

  & div {
    border: 1px solid #f1f1f1;
    padding: 2px 0;
  }
  &:hover {
    color: #078dfc;
    // background-color: #66afe9;
  }
}

.doc-desc {
  border: 1px solid #e9e6e63d;
  position: relative;
  margin: 10px 20px;
  padding: 10px 10px;
  border: 1px solid #ccc;
  background-color: #fffffd;
  box-shadow: 2px 2px 5px #ccc;

  &::before,
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 45%;
    height: 55%;
    max-height: 100px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &::after {
    left: auto;
    right: 10px;
  }

  .doc-desc-name {
    padding: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }
}

.test-demo {
  margin: 29px auto;
  padding: 8px 16px;
  border-radius: 8px;
  background: #fff;
  outline: 6px solid #eeeeee;
  box-shadow: 0 0 0 5px #eeeeee;
}
.money-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 30px;

  & div img {
    width: 500px;
    height: 550px;
  }
}
.heart-desc {
  padding: 20px 30px;
  color: transparent;
  font-size: 30px;
  font-weight: bold;
  color: #078dfc;
}
.top-title {
  position: fixed;
  z-index: 1000;
  right: 40px;
  bottom: 60px;
  border: 1px solid #dbdbdbc2;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #dbdbdbc2;
}

.test-button {
  margin: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  padding: 10px 18px;
  color: #5d5e61;
  background: #fff;
  border: 1px solid #cfd1d4;
  border-radius: 20px;
  outline: none;

  &:hover {
    background: #ccc;
  }
}

pre[class*="language-"] {
  background: #cccccc36;
}
</style>