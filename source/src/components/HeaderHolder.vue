<template>
  <div class="J_HeaderHolder">
    <div class="background">
    </div>
    <div class="inner">
      <div class="search clearfix">
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
      <div class="subjectList clearfix">
        <div class="list">
          <div v-for="item in computedOption.subjectList" class="item" :class="{ current : item.current }">
            <a href="javascript:;">{{ item.name }}</a>
          </div>
        </div>
        <div class="more">
          <a href="javascript:;">
            <i class="icon"></i>
          </a>
        </div>
      </div>
      <div class="banner">
        <slot></slot>
      </div>
      <div class="enterList clearfix">
        <div class="list">
          <div class="item">
            <a href="javascript:;">
              <img src="@public/images/2.svg" alt="">
              <span>推荐课程</span>
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="@public/images/3.svg" alt="">
              <span>精品课程</span>
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="@public/images/4.svg" alt="">
              <span>初中数学</span>
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <img src="@public/images/5.svg" alt="">
              <span>错题秘籍</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["option"],
  computed: {
    computedOption() {
      this.option.subjectList.unshift({
        name: "推荐",
        subjectId: ""
      });

      if (this.option.subjectList.length > 7) {
        this.option.subjectList.length = 7;
      }

      this.option.subjectList.forEach((item, index) => {
        if (index == 0) item.current = true;
      });

      return this.option;
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_HeaderHolder {
  position: relative;
  overflow: hidden;
  > .background {
    @size: 1800px;
    position: absolute;
    left: 50%;
    bottom: 180px;
    margin-left: -@size / 2;
    max-width: none !important;
    width: @size;
    height: @size;
    border-radius: 50%; // background-color: red;
    overflow: hidden;
    &::after {
      @height: 400px;
      .linear-gradient();
      position: absolute;
      left: 50%;
      bottom: 0;
      margin-left: -320px;
      width: 640px;
      height: @height;
      content: "";
    }
  }
  > .inner {
    position: relative;
    > .search {
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
    > .subjectList {
      @height: 28px;
      padding: 20px 30px;
      > .list {
        float: left;
        width: 480px;
        height: @height;
        line-height: @height;
        white-space: nowrap;
        > .item {
          display: inline-block;
          margin-right: 32px;
          > a {
            display: block;
            position: relative;
            color: @color5;
            &::after {
              display: none;
              position: absolute;
              left: 50%;
              bottom: -8px;
              margin-left: -36%;
              width: 72%;
              height: 3px;
              overflow: hidden;
              background-color: #fff;
              content: "";
            }
          }
          &:last-child {
            margin-right: 0;
          }
          &.current {
            > a {
              color: rgba(255, 255, 255, 1);
              &::after {
                display: block;
              }
            }
          }
        }
      }
      > .more {
        float: right;
        padding-left: 40px;
        height: @height;
        border-left: 1px solid @color5;
        > a {
          > .icon {
            position: relative;
            top: -2px;
            font-size: 32px;
            color: @color5;
          }
        }
      }
    }
    > .banner {
      height: 260px;
    }
    > .enterList {
      margin-top: 20px;
      padding-bottom: 20px;
      > .list {
        > .item {
          float: left;
          width: 25%;
          > a {
            display: block;
            text-align: center;
            color: @color2;
            > img {
              width: 80px;
              height: 80px;
            }
            > span {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
