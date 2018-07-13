<template>
<div class="J_HeaderHolder">
    <div class="background">
    </div>
    <div class="inner">
        <!-- -->
        <Search />

        <!-- -->
        <div class="subjectList clearfix">
            <div class="list">
                <div v-for="item in option.subjectList" class="item" :class="{ current : item.current }">
                    <router-link :to="{ name : 'courseFilterList' , params : { grade : '初一' , subject : item.name } }">{{ item.name }}</router-link>
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

        <!-- 
        <div class="enterList clearfix">
        <div class="list">
          <div class="item">
            <router-link :to="{ name : 'courseFilterList' , params : { grade : '初一' , subject : '全部' } }">
              <img src="@public/images/2.png" alt="推荐课程">
              <span>推荐课程</span>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{ name : 'courseFilterList' , params : { grade : '初一' , subject : '全部' } }">
              <img src="@public/images/3.png" alt="热门课程">
              <span>热门课程</span>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{ name : 'courseFilterList' , params : { grade : '初一' , subject : '数学' } }">
              <img src="@public/images/4.png" alt="数学课程">
              <span>数学课程</span>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{ name : 'courseFilterList' , params : { grade : '初一' , subject : '英语' } }">
              <img src="@public/images/5.png" alt="英语课程">
              <span>英语课程</span>
            </router-link>
          </div>
        </div>
      </div>
       -->

    </div>
</div>
</template>

<script>
import Search from "../components/Search";
export default {
  props: ["option"],
  computed: {},
  created() {
    if (
      this.option.subjectList.length &&
      this.option.subjectList[0].name != "推荐"
    ) {
      this.option.subjectList.unshift({
        name: "推荐",
        subjectId: ""
      });
    }

    if (this.option.subjectList.length > 7) {
      this.option.subjectList.length = 7;
    }

    this.option.subjectList.forEach((item, index) => {
      if (index == 0) item.current = true;
    });
  },
  components: {
    Search
  }
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
    bottom: 80px;
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
            color: @color9;
            &::after {
              display: none;
              position: absolute;
              left: 50%;
              bottom: -8px;
              margin-left: -36%;
              width: 72%;
              height: 3px;
              overflow: hidden;
              background-color: @color9;
              content: "";
            }
          }
          &:last-child {
            margin-right: 0;
          }
          &.current {
            > a {
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
        border-left: 1px solid @color9;
        > a {
          > .icon {
            position: relative;
            top: -2px;
            font-size: 32px;
            color: @color9;
          }
        }
      }
    }
    > .banner {
      height: 260px;
      overflow: hidden;
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
            color: @color3;
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
