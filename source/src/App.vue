<template>
  <div id="app">
    <router-view class="view"></router-view>
    <Navigation />
  </div>
</template>


<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  mounted() {},
  components: {
    Navigation
  }
};
</script>


<style lang="less">
@import "./assets/less/icomoon.less";
@import "./assets/less/quick.less";
* {
  margin: 0;
  padding: 0;
  /*消除输入框和按钮的原生外观*/
  outline: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
}

html {
  font-size: 15.625vw;
  &.desktop {
    background-color: #333;
    body {
      margin: 0 auto;
      max-width: 1080px;
    }
    div {
      max-width: 1080px !important;
    }
    @media (min-width: 1080px) {
      font-size: 168.5px;
    }
  }
}

body {
  background-color: #f4f4f4;
  // background-color: #fff;
  font-size: 20px;
}

a {
  text-decoration: none;
}

img,
input {
  pointer-events: none;
  border: none;
}

input {
  font-size: 20px;
}

select {
  background-color: transparent;
  border: none;
  font-size: 20px;
}

input::-webkit-input-placeholder {
  color: #999;
}
</style>
