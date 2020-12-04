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
              <button @click="inputResult(item)">执行测试</button>
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          d="M12 33L24 21L36 33"
          stroke="#000000"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 13H36"
          stroke="#000000"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "/@modules/prismjs/themes/prism.css";
import * as $R from "../../index.js";
import docData from "./../doc/index.js";

import { reactive, ref, toRef, toRefs, computed, watch, onMounted } from "vue";
export default {
  name: "BookDoc",
  props: {
    tobottom: Number,
  },
  setup(props) {
    const verison = ref("  找找看 API " + $R.version);

    let myDoc = docData();
    let docTree = myDoc.docTree;
    let docMapDemo = myDoc.docMapDemo;

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

            if (Top > 10) rightTop.value = true;
            else rightTop.value = false;
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
    : typeof val === "object"
    ? JSON.stringify(val, null)
    : typeof val === "number"
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
  }

  .doc-container {
    // border: 1px solid green;
    overflow: auto;
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

  & div {
    border: 1px solid #f1f1f1;
    padding: 2px 0;
  }
  &:hover {
    color: #7f06f8;
    // background-color: #66afe9;
  }
}

.doc-desc {
  border: 1px solid #e9e6e63d;
  position: relative;
  margin: 10px 20px;
  padding: 10px 10px;
  border: 1px solid #efefef;
  background-color: #fffffd;
  background-image: url(data:image/png;base64,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);
  box-shadow: 0px 6px 12px -4px #a9aaaacc;

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
    transform: skew(-15deg) rotate(-4deg);
  }

  &::after {
    left: auto;
    right: 10px;
    transform: skew(15deg) rotate(4deg);
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
  background: #f4f0ea;
  outline: 6px solid #66afe9;
  box-shadow: 0 0 0 5px #66afe9;
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
  background: linear-gradient(
    45deg,
    rgba(0, 173, 181, 1) 0%,
    rgba(0, 173, 181, 0.4) 100%
  );
  -webkit-background-clip: text;
}
.top-title {
  position: fixed;
  z-index: 1000;
  right: 40px;
  bottom: 60px;
  border: 1px solid #afafaf;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #afafaf;
}
</style>