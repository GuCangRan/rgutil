<template>
  <div class="container">
    <header>
      <div class="header-title">$R</div>
      <div class="header-tips">
        <div class="header-tips-content">
          禿然听见需求方创意&&杠铃般的笑声, 我自己拔掉了最后一根头发
        </div>
      </div>

      <div @click="goMoney" style="padding-top: 3px">
        <?xml version="1.0" encoding="UTF-8"?><svg
          width="33"
          height="33"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>帮助作者吸口氧气</title>
          <rect width="48" height="48" fill="white" fill-opacity="0.01" />
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M18 22H30"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 28H30"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.0083 22V34"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 15L24 21L18 15"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div @click="goToGithub">
        <svg
          class="header-item"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
        >
          <title>GitHub可看使用说明</title>
          <path
            d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
          ></path>
        </svg>
      </div>
    </header>
    <main>
      <BookDoc :tobottom="bValue" />
    </main>
    <footer>
      如果你在我身边多好, 我又何必点一杯心痛的饮料 "500一杯 白开水"
    </footer>
  </div>
</template>

<script>
import BookDoc from "./components/bookdoc.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    BookDoc,
  },
  setup() {
    const goToGithub = () => {
      window.open("https://github.com/GuCangRan/rgutil");
    };

    const bValue = ref(0);
    const goMoney = () => {
      //console.log(bValue.value);
      bValue.value++;
    };

    return {
      goToGithub,
      goMoney,
      bValue,
    };
  },
};
</script>
<style lang="scss">
.container {
  height: 100vh;
  display: grid;
  grid-auto-rows: 50px 1fr 30px;
}
header {
  display: grid;
  grid-template-columns: auto 1fr 30px 100px;
  grid-gap: 15px;
  background: linear-gradient(180deg, #0b8df6, #2196f3), #2196f3;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 40px;
    right: 0;
    background-repeat: repeat-x;
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #fff 13px,
      #fff 20px
    );
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 35px;
    right: 0;
    background-repeat: repeat-x;
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      white 12px,
      transparent 13px
    );
  }

  .header-title {
    font-size: 28px;
    padding: 5px 10px;
  }

  .header-tips {
    height: 100%;
    position: relative;
  }
  .header-tips-content {
    position: absolute;
    bottom: 15px;
    padding: 3px 3px;
    color: #c5d8f1;
    // text-shadow: 0 1px 1px #ffffff4d;
    // box-shadow: 0 0 0 1px #ffffff1a inset, 0 2px 10px #250202c5;
    // border-radius: 5px;
  }
  .header-item {
    height: 35px;
    padding: 4px 0;
  }
}

main {
  background-color: #f5f7f9;
  overflow: auto;
  padding: 0 5px;
}

footer {
  background-color: #2d3748;
  line-height: 30px;
  text-align: center;
  color: #e2eaf79a;
}
</style>
