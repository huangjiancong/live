<template>
    <div class="J_Search">
        <div :class="{ focus : focus }" class="input">
            <i class="icon"></i>
            <input @focus="focus = true" @blur="focus = false" placeholder="复仇者联盟3：无限战争" type="text">
        </div>
        <div class="btnList">
            <div class="list clearfix">
            <div class="item">
                <a href="javascript:;"><i class="icon"></i></a>
            </div>
            <div class="item">
                <a href="javascript:;"><i class="icon"></i></a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false
    };
  }
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_Search {
  @height: 68px;
  padding: 20px 30px 0;
  height: @height;
  > .input {
    transition: opacity 0.4s ease-out;
    float: left;
    padding: 0 20px;
    width: 390px;
    height: @height;
    background-color: #fff;
    border-radius: @height / 2;
    opacity: 0.4;
    > .icon {
      position: relative;
      top: 18px;
      font-size: 32px;
      color: @color7;
    }
    > input {
      position: relative;
      top: 10px;
      margin-left: 6px;
      width: 320px;
      background-color: transparent;
    }
    &.focus {
      opacity: 1;
    }
  }
  > .btnList {
    float: right;
    > .list {
      padding: 6px 0;
      > .item {
        float: left;
        margin-left: 16px;
        > a {
          display: block;
          width: @height - 12px;
          height: @height - 12px;
          line-height: @height - 12px;
          background-color: #fbd26a;
          border-radius: 50%;
          text-align: center;
          color: @color5;
          > i {
            position: relative;
            top: 9px;
            font-size: 37px;
            vertical-align: top;
          }
        }
      }
    }
  }
}
</style>
