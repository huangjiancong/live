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
  methods: {
    getWindowSize() {
      this.$store.dispatch(
        "window_set_width",
        document.documentElement.clientWidth || document.body.clientWidth
      );
      this.$store.dispatch(
        "window_set_height",
        document.documentElement.clientHeight || document.body.clientHeight
      );
    }
  },
  mounted() {
    this.getWindowSize();
    window.addEventListener("resize", () => {
      this.getWindowSize();
    });
  },
  components: {
    Navigation
  }
};
</script>


<style lang="less">
@import "./assets/less/common.less";
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
      div {
        max-width: 1080px !important;
      }
    }

    @media (min-width: 1080px) {
      font-size: 168.5px;
    }
  }
}

body {
  background-color: #fff;
  // background-color: #fff;
  font-size: 20px;
  color: @color4;
}

a {
  text-decoration: none;
  color: @color4;
}

img,
input {
  border: none;
}

img {
  pointer-events: none;
  vertical-align: top;
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
