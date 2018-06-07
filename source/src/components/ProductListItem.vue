<template>
    <div :class="{ isPlay : option.item.isPlay }" :data-href="option.item.courseId" class="J_ProductListItem">
      <router-link :to="{ name: 'productDetails' , params: { courseId: option.item.courseId } }" class="inner">
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
          <video ref="video" src="http://test.huifang.zycourse.com/recordings/z1.testzycourse.5b16256820a05d020c207134/698002972889579520.m3u8" preload="none" playsinline="true" x-webkit-airplay="true" webkit-playsinline="true" controls="true"></video>
        </div>
        <div class="details">
          <div class="title">{{ option.item.title }}</div>
          <div class="intro">{{ computedIntro }}</div>
          <div class="labelList">
            <div v-for="item in computedLabel" class="item">{{ item }}</div>
          </div>
          <div @click.prevent="play(option.item)" class="play">
            <i class="icon icon-play"></i>
            <div @click.stop.prevent="control(option.item)" class="control clearfix">
              <div class="like">
                <i class="icon icon-heart"></i>
              </div>
              <div @click.stop.prevent="pause(option.item)" class="pause">
                <i class="icon icon-x"></i>
              </div>
              <div class="full">
                <i class="icon icon-airplay"></i>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  props: ["option"],
  computed: {
    computedIntro() {
      var result = "";
      var { item } = this.option;
      var intro = item.intro.replace(/<[^>]+>|&nbsp;/g, "");
      var gradeName = item.gradeName.split("|").join("、");
      var orgName = item.orgName;
      var teacherName = item.teacherName;
      if (intro) {
        result = intro;
      } else {
        result = `本教材是由${orgName}机构中的${teacherName}老师根据,目前${gradeName}的在读学生原则编写而成。`;
      }
      return result;
    },
    computedLabel() {
      var result = [];
      var { item } = this.option;
      var subjectName = item.subjectName.split("|");
      var gradeName = item.gradeName.split("|");

      if (subjectName.length) {
        subjectName.forEach(item => result.push(item));
      }

      if (gradeName.length) {
        gradeName.forEach(item => result.push(item));
      }

      return result;
    }
  },
  methods: {
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
    display: block;
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
      height: 136px;
      > .title {
        font-size: 26px;
        color: @color2;
      }
      > .intro {
        .text-row-overflow(2);
        margin-top: 8px;
        height: 56px;
        line-height: 28px;
        font-size: 18px;
        color: @color4;
      }
      > .labelList {
        margin-top: 10px;
        > .item {
          .linear-gradient();
          display: inline-block;
          padding: 0 10px;
          margin-right: 14px;
          border-radius: 3px;
          font-size: 16px;
          color: #fff;
        }
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
            > i {
              font-size: 36px;
              color: #fff;
            }
          }
          > .pause {
            float: left;
            margin-left: 210px;
            margin-top: -10px;
            > i {
              font-size: 52px;
              color: #fff;
            }
          }
          > .full {
            float: right;
            > i {
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

