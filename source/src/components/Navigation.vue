<template>
    <div class="J_Navigation" :class="[ Navigation.show ]">
        <div class="inner">
            <div v-for="item in option" class="item" :class="{ current : item.to == $route.name }">
                <router-link :to="{ name : item.to }">
                    <i class="icon">{{ item.icon }}</i>
                    <span>{{ item.title }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            option: [{
                icon: '',
                title: '首页',
                to: 'index'
            },
            {
                icon: '',
                title: '分类',
                to: 'list'
            },
            {
                icon: '',
                title: '机构',
                to: 'org'
            },
            {
                icon: '',
                title: '购物车',
                to: 'cart'
            },
            {
                icon: '',
                title: '我的',
                to: 'userCenter'
            }
            ]
        }
    },
    computed: {
        ...mapGetters(['Navigation'])
    },
    methods: {
        click(item) {
            this.$router.push({
                name: item.name
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_Navigation {
  display: none;
  height: @NavigationHeight;
  > .inner {
    position: fixed;
    z-index: 999;
    bottom: 0;
    width: 100%;
    height: @NavigationHeight;
    background-color: #fff;
    border-top: 1px solid @color8;
    > .item {
      float: left;
      width: 20%;
      text-align: center;
      > a {
        display: block;
        color: @color7;
        > i {
          display: block;
          margin-top: 12px;
          height: 36px;
          font-size: 36px;
        }
        > span {
          display: block;
          margin-top: 2px;
          font-size: 16px;
        }
      }
      &.current {
        > a {
          color: @color1;
        }
      }
    }
  }
  &.show {
    display: block;
  }
  &.transparent {
    display: block;
    > .inner {
      background-color: transparent;
      border-top-color: transparent;
      > .item {
        > a {
          color: rgba(255, 255, 255, 0.6);
        }
        &.current {
          > a {
            color: @color1;
          }
        }
      }
    }
  }
}
</style>

