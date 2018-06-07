<template>
    <div class="courseList">
      <div class="header">
        <div class="inner">
            <div class="title">课程分类</div>
            <div v-if="courseFilterList && courseFilterList.gradeAndSubject && courseFilterList.gradeAndSubject.gradeList" class="gradeName">
              <select v-model="grade">
                <option v-for="item in courseFilterList.gradeAndSubject.gradeList" :value="item.name">{{ item.name }}</option>
              </select>
            </div>
        </div>
        <div class="main">
          <div class="mt20">
            <ProductList :option="courseFilterList.courseList" />
          </div>
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
  created() {
    if (this.courseFilterList && this.courseFilterList.gradeAndSubject) {
      this.grade = this.courseFilterList.gradeAndSubject.gradeList[0].name;
    }
  },
  watch: {
    grade(newValue) {
      var { params } = this.$route;
      this.$router.replace({
        name: "courseFilterList",
        params: {
          grade: newValue,
          subject: params.subject
        }
      });
    }
  },
  computed: {
    ...mapGetters(["courseFilterList"])
  },
  asyncData({ store, route }) {
    var { params } = route;
    console.log(route.params);
    var gradeAndSubject = new Promise((resolve, reject) => {
      resolve(store.dispatch("courseFilterList_set_gradeAndSubject"));
    });

    var courseList = new Promise((resolve, reject) => {
      resolve(
        store.dispatch("courseFilterList_set_courseList", {
          grade: params.grade,
          subject: params.subject
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
.header {
  @size: 88px;
  .linear-gradient();
  position: relative;
  height: @size;
  > .inner {
    > .title {
      height: @size;
      line-height: @size;
      text-align: center;
      font-size: 28px;
      color: #fff;
    }
    > .gradeName {
      position: absolute;
      right: 20px;
      top: 0;
      > select {
        height: @size;
        opacity: 0.6;
        color: #fff;
        font-size: 24px;
        > option {
          color: #000;
        }
      }
    }
  }
}
</style>
