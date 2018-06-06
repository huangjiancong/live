<template>
    <div :class="{ isPlay : option.item.isPlay }" @click="href(option.item)" class="J_ProductListItem">
      <div class="inner">
          <div class="teacher clearfix">
            <div class="face">
              <img src="" alt="">
            </div>
            <div class="details">
                <div class="teacherName">{{ option.item.teacherName }}</div>
                <div class="orgName">{{ option.item.orgName }}</div>
            </div>
          </div>
          <div class="resources">
            <img :src="option.item.cover" :alt="option.item.title">
            <video ref="video" src="http://test.huifang.zycourse.com/recordings/z1.testzycourse.5b16256820a05d020c207134/698002972889579520.m3u8"></video>
          </div>
          <div class="details">
            <div class="title">{{ option.item.title }}</div>
            <div class="intro">{{ option.item.intro.replace(/<[^>]+>/g,'') }}</div>
            <div @click.stop="play(option.item)" class="play">
              <i class="icon icon-play"></i>
              <div @click.stop="control(option.item)" class="control clearfix">
                  <div class="like">
                    <a href="javascript:;">
                      <i class="icon icon-heart"></i>
                    </a>
                  </div>
                  <div @click.stop="pause(option.item)" class="pause">
                    <a href="javascript:;">
                      <i class="icon icon-pause"></i>
                    </a>
                  </div>
                  <div class="full">
                    <a href="javascript:;">
                      <i class="icon icon-airplay"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <router-link :to="{ name : 'productDetails' , params : { courseId : option.courseId } }"></router-link> -->
      </div>
    </div>
</template>

<script>
export default {
  props: ["option"],
  methods: {
    href(item) {
      this.$router.push({
        name: "productDetails",
        params: { courseId: item.courseId }
      });
    },
    play(item) {
      this.option.all.forEach(optionItem => {
        if (optionItem.courseId == item.courseId) {
          optionItem.isPlay = true;
          optionItem.$video.play();
        } else {
          optionItem.$video.pause();
          optionItem.isPlay = false;
        }
      });
    },
    control(item) {
      return false;
    },
    pause(item) {
      item.$video.pause();
      item.isPlay = false;
    }
  },
  created() {
    this.$set(this.option.item, "isPlay", false);
  },
  mounted() {
    this.$set(this.option.item, "$video", this.$refs.video);
  }
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_ProductListItem {
  > .inner {
    > .teacher {
      padding: 20px;
      > .face {
        float: left;
        width: 68px;
        height: 68px;
        background-color: #f4f4f4;
        border-radius: 50%;
        > img {
        }
      }
      > .details {
        float: left;
        margin-left: 20px;
        > .teacherName {
          margin-top: 4px;
          font-size: 24px;
          color: @color2;
        }
        > .orgName {
          margin-top: 2px;
          color: @color4;
        }
      }
    }
    > .resources {
      background-color: #000;
      > img {
        display: inline-block;
        width: 100%;
        height: 360px;
        vertical-align: top;
      }
      > video {
        display: none;
        width: 100%;
        height: 360px;
        vertical-align: top;
      }
    }
    > .details {
      position: relative;
      padding: 20px;
      height: 128px;
      > .title {
        font-size: 26px;
        color: @color2;
      }
      > .intro {
        .text-row-overflow(3);
        margin-top: 10px;
        line-height: 28px;
        font-size: 18px;
        color: @color4;
      }
      > .play {
        .linear-gradient();
        transition: all 0.2s ease-out;
        position: absolute;
        right: 32px;
        top: -46px;
        width: 92px;
        height: 92px;
        background-color: @color1;
        border-radius: 50%;
        // box-shadow: 2px 2px 10px #ddd;
        > .icon-play {
          display: inline-block;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -20px;
          margin-top: -20px;
          font-size: 42px;
          color: #fff;
        }
        > .control {
          display: none;
          padding: 40px;
          > .like {
            float: left;
            > a {
              font-size: 36px;
              color: #fff;
            }
          }
          > .pause {
            float: left;
            margin-left: 210px;
            margin-top: -10px;
            > a {
              font-size: 52px;
              color: #fff;
            }
          }
          > .full {
            float: right;
            > a {
              font-size: 36px;
              color: #fff;
            }
          }
        }
      }
    }
  }
  &.isPlay {
    > .inner {
      > .resources {
        > img {
          display: none;
        }
        > video {
          display: block;
        }
      }
      > .details {
        > .play {
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
          > .icon-play {
            display: none;
          }
          > .control {
            display: block;
          }
        }
      }
    }
  }
}
</style>

