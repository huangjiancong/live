<template>
    <div class="about">
        <div class="main">
            
            <div class="resources">
                <p>数据源</p>
                <img src="http://dianbo.zycourse.com/ykt_logo.png?n=1528788038732" alt="">
            </div>
 
            <div class="code">
                <img src="@public/images/8.png" alt="qrcode">
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
export default {};
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
    > .code {
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

