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
      grade: "全部"
    };
  },
  computed: {
    ...mapGetters(["courseFilterList"])
  },
  watch: {
    grade(newValue) {
      var { subject } = this.$route.params;
      console.log(subject);
      if (!newValue || newValue == "全部") {
        newValue = "";
      }
      this.$router.replace({
        name: "courseFilterList",
        params: {
          grade: newValue,
          subject
        }
      });
    }
  },
  created() {
    var { gradeList } = this.courseFilterList.gradeAndSubject;
    if (gradeList[0].name != "全部") {
      gradeList.unshift({
        subjectId: "",
        name: "全部"
      });
    }
  },
  asyncData({ store, route }) {
    var { grade } = route.params;
    var { subject } = route.params;

    if (!grade || grade == "全部") {
      grade = "";
    }
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
