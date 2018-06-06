<template>
    <div class="index">

        <div class="bgfff">
            <!-- <HeaderHolder> -->
                <AsyncPanel>
                    <!-- <Banner /> -->
                </AsyncPanel>
            <!-- </HeaderHolder> -->
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
// import HeaderHolder from "../components/HeaderHolder";

import { mapGetters } from "vuex";

export default {
  title: "首页",
  computed: {
    ...mapGetters(["index"])
  },
  asyncData({ store, route }) {
    var newCourse = new Promise((resolve, reject) => {
      resolve(store.dispatch("index_set_newCourse"));
    });

    return Promise.all([newCourse]);
  },
  components: {
    AsyncPanel
    // HeaderHolder
  }
};
</script>

<style lang="less" scoped>
.index {
}
</style>
