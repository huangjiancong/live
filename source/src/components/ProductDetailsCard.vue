<template>
    <div class="J_ProductDetails">
      <div class="inner" :style="{ minHeight : `${minHeight}px` }">
        <div class="cover">
          <img :src="option.cover" :alt="option.title">
        </div>
        <div class="details">
          <div class="mask"></div>
          <div class="main">
            <div class="orgName">{{ option.orgName }}</div>
            <div class="title">{{ option.title }}</div>
            <div class="labelList">
              <div v-for="item in computedLabel" class="item">{{ item }}</div>
            </div>
            <div class="intro">{{ computedIntro }}</div>
            <div class="price">
              <span>￥</span>
              <b>{{ option.price }}</b>
            </div>
            <div v-if="option.imgList" class="imgList">
              <div class="list">
                <div v-for="item in option.imgList" class="item"><img :src="item" :alt="option.title"></div>
              </div>
            </div>
            <div v-if="option.lectureList && option.lectureList.length" class="lectureList">
              <div class="title">课程章节</div>
              <div class="list">
                <div v-for="(item,index) in option.lectureList" class="item">{{ index + 1 }}、{{ item.title }}</div>
              </div>
            </div>
            <div class="like">
              <a href="javascript:;">
                <i class="icon icon-heart"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="inner">
            <div class="btnList clearfix">
              <div class="item">
                <a class="abtn color3" href="javascript:;"><span>加入购物车</span></a>
              </div>
              <div class="item">
                <a class="abtn color2" href="javascript:;"><span>立即购买</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["option"],
  data() {
    return {
      minHeight: 0
    };
  },
  computed: {
    computedIntro() {
      var result = "";
      var { option } = this;
      var intro = option.intro.replace(/<[^>]+>|&nbsp;/g, "");
      var gradeName = option.gradeName.split("|").join("、");
      var orgName = option.orgName;
      var teacherName = option.teacherName;
      if (intro) {
        result = intro;
      } else {
        result = `本教材是由${orgName}机构中的${teacherName}老师根据,目前${gradeName}的在读学生原则编写而成。`;
      }
      return result;
    },
    computedLabel() {
      var result = [];
      var { option } = this;
      var subjectName = option.subjectName.split("|");
      var gradeName = option.gradeName.split("|");

      if (subjectName.length) {
        subjectName.forEach(item => result.push(item));
      }

      if (gradeName.length) {
        gradeName.forEach(item => result.push(item));
      }

      return result;
    }
  },
  created() {
    this.$set(this.option, "imgList", []);
  },
  mounted() {
    this.minHeight = window.innerHeight;
    /* 富文本图片处理 */
    var $el = document.createElement("div");
    $el.innerHTML = this.option.intro;
    var $img = $el.getElementsByTagName("img");
    for (var i = 0, l = $img.length; i < l; i++) {
      this.option.imgList.push($img[i].getAttribute("src"));
    }
    $el = null;
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_ProductDetails {
  @keyframes cover {
    0% {
      transform: scale(1.6);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes details {
    0% {
      transform: translate3d(0, 960px, 0);
      opacity: 0;
    }
    20% {
      transform: translate3d(0, -100px, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  > .inner {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    > .cover {
      animation: cover 1s ease-out forwards;
      > img {
        width: 100%;
        height: 390px;
        vertical-align: top;
      }
    }
    > .details {
      animation: details 1.2s ease-out forwards;
      position: relative;
      padding: 60px 0 30px;
      background-color: #fff;
      > .mask {
        position: absolute;
        left: -60px;
        top: -50px;
        width: 120%;
        height: 100px;
        transform: rotate(8deg);
        background-color: #fff;
        // opacity: 0.4;
      }
      > .main {
        position: relative;
        margin-top: -90px;
        padding: 0 20px;
        > .title {
          width: 480px;
          font-size: 36px;
          color: @color2;
        }
        > .orgName {
          color: @color3;
        }
        > .title {
        }
        > .labelList {
          margin-top: 10px;
          > .item {
            .linear-gradient();
            display: inline-block;
            padding: 0 10px;
            margin-right: 14px;
            border-radius: 3px;
            vertical-align: top;
            font-size: 16px;
            color: #fff;
          }
        }
        > .intro {
          margin-top: 20px;
          color: @color4;
        }
        > .price {
          margin-top: 20px;
          .price();
        }
        > .imgList {
          margin-top: 20px;
          > .list {
            > .item {
              > img {
                width: 100%;
                vertical-align: top;
              }
            }
          }
        }
        > .lectureList {
          margin-top: 60px;
          > .title {
            text-align: center;
            letter-spacing: 6px;
            font-size: 26px;
            color: @color2;
          }
          > .list {
            margin-top: 20px;
            > .item {
              margin-top: 20px;
              font-size: 24px;
              color: @color4;
            }
          }
        }
        > .like {
          @size: 84px;
          position: absolute;
          right: 40px;
          top: -30px;
          > a {
            display: block;
            width: @size;
            height: @size;
            background-color: #e64a47;
            border-radius: 50%;
            text-align: center;
            font-size: 40px;
            color: #fff;
            > .icon {
              position: relative;
              top: 24px;
            }
          }
        }
      }
    }
    > .footer {
      @size: 80px;
      position: relative;
      height: @size;
      > .inner {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        > .btnList {
          > .item {
            float: left;
            width: 54%;
            > a {
              display: block;
              margin-left: -10%;
              width: 120%;
              height: @size;
              line-height: @size;
              transform: skewX(-24deg);
              text-align: center;
              font-size: 24px;
              color: #fff;
              > span {
                display: block;
                transform: skewX(24deg);
              }
            }
            &:last-child {
              width: 46%;
            }
          }
        }
      }
    }
  }
}
</style>




