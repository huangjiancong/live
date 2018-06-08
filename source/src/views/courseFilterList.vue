<template>
    <div class="courseList">
      <div class="header">
        <div class="inner">
          <div class="caption">
            <div class="left"></div>
            <div class="center">
              <div class="title">课程分类</div>
            </div>
            <div class="right">
                <div class="gradeName">
                  <select v-model="grade">
                    <option v-for="item in computedGradeList" :value="item.name">{{ item.name }}</option>
                  </select>
                </div>
            </div>
          </div>
          <div class="filterList">
            <div class="inner">
              <div class="list">
                <div v-for="item in computedSubjectList" :class="{ current : $route.params.subject == item.name }" class="item">
                  <router-link :to="{ name : 'courseFilterList' , params : { grade : $route.params.grade || '小一' , subject : item.name }  }">{{ item.name }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="mt20">
          <ProductList :option="courseFilterList.courseList" />
        </div>
      </div>
    </div>
</template>

<script>
import mixins from "mixins";
import ProductList from "../components/ProductList";

import { mapGetters } from "vuex";
export default {
  title: "课程分类",
  mixins: [mixins],
  data() {
    return {
      grade: ""
    };
  },
  computed: {
    ...mapGetters(["courseFilterList"]),
    computedGradeList() {
      var { gradeList } = this.courseFilterList.gradeAndSubject;
      return gradeList;
    },
    computedSubjectList() {
      var { subjectList } = this.courseFilterList.gradeAndSubject;

      if (subjectList[0].name != "全部") {
        subjectList.unshift({
          subjectId: "",
          name: "全部"
        });
      }

      return subjectList;
    }
  },
  watch: {
    $route: {
      handler() {
        var { grade } = this.$route.params;
        var { subject } = this.$route.params;

        if (!grade) {
          grade = "初一";
        }

        if (!subject) {
          subject = "全部";
        }

        this.$router.replace({
          name: "courseFilterList",
          params: {
            grade,
            subject
          }
        });
      },
      deep: true
    },
    grade(newValue) {
      var { subject } = this.$route.params;
      if (!subject) subject = "全部";
      this.$router.replace({
        name: "courseFilterList",
        params: {
          grade: newValue,
          subject
        }
      });
    }
  },
  mounted() {
    var { grade } = this.$route.params;
    if (!grade) {
      this.grade = "小一";
    } else {
      this.grade = grade;
    }
  },
  asyncData({ store, route }) {
    var { grade } = route.params;
    var { subject } = route.params;

    if (!subject || subject == "全部") {
      subject = "";
    }

    var gradeAndSubject = new Promise((resolve, reject) => {
      resolve(store.dispatch("courseFilterList_set_gradeAndSubject"));
    });

    var courseList = new Promise((resolve, reject) => {
      resolve(
        store.dispatch("courseFilterList_set_courseList", {
          grade,
          subject
        })
      );
    });

    return Promise.all([gradeAndSubject, courseList]);
  },
  components: {
    ProductList
  }
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.courseList {
  @keyframes inner {
    0% {
      transform: translate3d(0, 240px, 0);
      opacity: 0;
    }
    20% {
      transform: translate3d(0, -140px, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes main {
    0% {
      transform: translate3d(0, 460px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  > .header {
    position: relative;
    height: 148px;
    > .inner {
      animation: inner 1.2s ease-out forwards;
      position: fixed;
      z-index: 999;
      top: 0;
      width: 100%;
      height: 148px;
      background-color: #fff;
      box-shadow: 5px 5px 10px rgba(168, 168, 168, 0.2);
      > .caption {
        @size: 88px;
        position: relative;
        height: @size;
        > .left {
          position: relative;
          z-index: 1;
        }
        > .center {
          > .title {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            line-height: @size;
            text-align: center;
            letter-spacing: 6px;
            font-size: 28px;
            color: @color3;
          }
        }
        > .right {
          position: relative;
          z-index: 1;
          > .gradeName {
            position: absolute;
            right: 20px;
            top: 0;
            > select {
              height: @size;
              opacity: 0.6;
              color: @color4;
              font-size: 24px;
              > option {
                color: #000;
              }
            }
          }
        }
      }
      > .filterList {
        > .inner {
          .overflow-scrolling();
          padding-left: 30px;
          overflow-x: auto;
          > .list {
            white-space: nowrap;
            > .item {
              display: inline-block;
              margin-right: 50px;
              vertical-align: top;
              > a {
                display: inline-block;
                position: relative;
                height: 60px;
                line-height: 60px;
                font-size: 24px;
                color: @color4;
                &:after {
                  position: absolute;
                  left: -10%;
                  bottom: 0;
                  width: 120%;
                  height: 3px;
                  background-color: transparent;
                  content: "";
                }
              }
              &.current {
                > a {
                  color: @color1;
                  &:after {
                    .linear-gradient();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  > .main {
    animation: main 1s ease-out forwards;
  }
}
</style>
