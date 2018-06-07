<template>
    <div class="J_Search">
        <div class="input">
            <i class="icon"></i>
            <input placeholder="KET通关必考语法强化班" type="text">
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
export default {};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_Search {
  @height: 68px;
  padding: 20px 30px 0;
  height: @height;
  > .input {
    float: left;
    padding: 0 20px;
    width: 390px;
    height: @height;
    background-color: #fff;
    border-radius: @height / 2;
    > .icon {
      position: relative;
      top: 18px;
      font-size: 32px;
      color: @color7;
    }
    > input {
      position: relative;
      top: 12px;
      margin-left: 6px;
      width: 320px;
      background-color: transparent;
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
          background-color: #68c7fd;
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
