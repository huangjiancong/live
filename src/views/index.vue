<template>
    <div class="index">
      <div class="list">
        <div v-for="item in index.newCourse" class="item">
          <router-link :to="{ name : 'productDetails' , params : { courseId : item.courseId } }">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
</template>

<script>
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
  }
};
</script>
