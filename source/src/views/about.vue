<template>
    <div class="about">
        <div class="main">
            
            <div class="resources">
                <p>数据源</p>
                <img :src="about.resourcesImg" alt="logo">
            </div>
 
            <div class="qrcode">
                <img :src="about.qrcodeImg" alt="qrcode">
            </div>
            
            <div class="participant">
                <p>项目参与者</p>
                <ul>
                    <li>运维：chris、李佰典</li>
                    <li>前端：黄健聪</li>
                </ul>
            </div>
            
            <div class="btn">
                <router-link class="abtn color1" :to="{ name : 'index' }">返回首页</router-link>
            </div>
            
            <div class="version">
                <p>用途：用于练习与分享</p>
                <p>版本：v1.0.0-beta.1</p>
            </div>
            
        </div>
    </div>
</template>

<script>
import mixins from "mixins";
import { mapGetters } from "vuex";
export default {
  title: "关于",
  mixins: [mixins],
  computed: {
    ...mapGetters(["about"])
  },
  asyncData({ store, route }) {
    var resourcesImgAndqrcodeImg = new Promise((resolve, reject) => {
      resolve(store.dispatch("about_get_resourcesImg_qrcodeImg"));
    });

    return Promise.all([resourcesImgAndqrcodeImg]);
  }
};
</script>

<style lang="less" scoped>
.about {
  @import "../assets/less/common.less";
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../../public/images/7.jpg) no-repeat 0 0;
  background-size: 100% 100%;
  > .main {
    margin: 0 auto;
    padding: 100px 0;
    width: 400px;
    > .resources {
      > p {
        text-align: center;
        font-size: 24px;
        color: @color3;
      }
      > img {
        margin-top: 8px;
        width: 400px;
        vertical-align: top;
      }
    }
    > .qrcode {
      margin-top: 40px;
      text-align: center;
      > img {
        width: 280px;
        vertical-align: top;
      }
    }
    > .participant {
      margin-top: 40px;
      > p {
        text-align: center;
        font-size: 24px;
        color: @color3;
      }
      > ul {
        margin-top: 20px;
        padding-left: 100px;
        > li {
          margin-top: 6px;
          font-size: 24px;
          color: @color4;
        }
      }
    }
    > .btn {
      margin-top: 40px;
      > a {
        display: block;
        line-height: 72px;
        border-radius: 44px;
        text-align: center;
        font-size: 24px;
        color: #fff;
      }
    }

    > .version {
      margin-top: 20px;
      padding-left: 90px;
      color: @color4;
      > p {
        margin-top: 6px;
      }
    }
  }
}
</style>

