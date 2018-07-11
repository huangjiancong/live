<template>
    <div class="J_Caption">
      <b>
        <span v-for="item in computedOption">{{ item }}</span>
      </b>
        
    </div>
</template>

<script>
export default {
  props: ["option"],
  computed: {
    computedOption() {
      var result = this.option.split("");
      return result;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_Caption {
  text-align: center;
  width: 100%;
  line-height: 120px;
  text-align: center;
  font-size: 28px;
  color: @color2;
  > b {
    margin: 0 20px;
    font-weight: normal;
    > span {
      margin: 0 6px;
    }
  }
  &::before {
    display: inline-block;
    width: 120px;
    height: 1px;
    background-color: @color8;
    overflow: hidden;
    vertical-align: middle;
    content: "";
  }
  &::after {
    display: inline-block;
    width: 120px;
    height: 1px;
    background-color: @color8;
    overflow: hidden;
    vertical-align: middle;
    content: "";
  }
}
</style>
