<template>
  <div class="J_AsyncPanel">
    <div v-if="(JSON.stringify(option) == '{}' || JSON.stringify(option) == '[]')" class="loading">
      <img src="../../public/images/0.svg" alt="">
      <p>正在玩命加载中...</p>
    </div>
    <slot></slot>
    <div v-if="option == null" class="dataEmpty">
      对不起，暂时没有找到相关数据
    </div>
  </div>
</template>

<script>
export default {
  props: ["option"]
};
</script>


<style lang="less" scoped>
@import "../assets/less/common.less";
.J_AsyncPanel {
  > .loading {
    text-align: center;
    > img {
      height: 320px;
      vertical-align: top;
    }
    > p {
      position: relative;
      top: -60px;
      color: @color4;
    }
  }
  > .dataEmpty {
    padding: 100px 0;
    text-align: center;
    color: @color4;
  }
}
</style>
