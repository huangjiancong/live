<template>
    <div v-if="option.filter(item => item.to == $route.name).length && $route.name != 'about'" class="J_Navigation">
        <div class="inner">
            <div v-for="item in option" class="item" :class="{ current : item.to == $route.name }">
                <router-link :to="{ name : item.to , params : { grade : $route.params.grade , subject : $route.params.subject } }">
                    <i class="icon">{{ item.icon }}</i>
                    <span>{{ item.title }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      option: [
        {
          icon: "",
          title: "首页",
          to: "index"
        },
        {
          icon: "",
          title: "分类",
          to: "courseFilterList"
        },
        {
          icon: "",
          title: "关于",
          to: "about"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_Navigation {
  height: @NavigationHeight;
  > .inner {
    position: fixed;
    z-index: 999;
    bottom: -1px;
    width: 100%;
    height: @NavigationHeight;
    background-color: #fff;
    border-top: 1px solid @color8;
    > .item {
      float: left;
      width: 33.33%;
      text-align: center;
      > a {
        display: block;
        color: @color7;
        > i {
          display: block;
          margin-top: 12px;
          height: 42px;
          font-size: 42px;
        }
        > span {
          display: block;
          margin-top: 2px;
          font-size: 18px;
        }
      }
      &.current {
        > a {
          color: @color1;
        }
      }
    }
  }
}
</style>

