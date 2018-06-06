<template>
    <div class="index">

        <div class="bgfff">
            <HeaderHolder :option="index.gradeAndSubject">
                <Banner :option="index.banner" />
            </HeaderHolder>
        </div>

      <div class="list">
        <div v-for="item in index.newCourse" class="item">
          <router-link :to="{ name : 'productDetails' , params : { courseId : item.courseId } }">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import AsyncPanel from "../components/AsyncPanel";
import HeaderHolder from "../components/HeaderHolder";
import Banner from "../components/Banner";

import { mapGetters } from "vuex";

export default {
  title: "首页",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["index"])
  },
  asyncData({ store, route }) {
    var gradeAndSubject = new Promise((resolve, reject) => {
      resolve(store.dispatch("index_set_gradeAndSubject"));
    });

    var banner = new Promise((resolve, reject) => {
      resolve(store.dispatch("index_set_banner"));
    });

    var newCourse = new Promise((resolve, reject) => {
      resolve(store.dispatch("index_set_newCourse"));
    });

    return Promise.all([gradeAndSubject, newCourse, banner]);
  },
  components: {
    AsyncPanel,
    Banner,
    HeaderHolder
  }
};
</script>

<style lang="less" scoped>
.index {
}
</style>
