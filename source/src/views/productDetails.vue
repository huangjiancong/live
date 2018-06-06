<template>
    <div class="productDetails">
        <div class="list">
            <div v-for="(item,key) in productDetails.details" class="item">
              {{ key }} : {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  title: "产品详情",
  computed: {
    ...mapGetters(["productDetails"])
  },
  asyncData({ store, route }) {
    var { params } = route;

    var productDetails = new Promise((resolve, reject) => {
      resolve(
        store.dispatch("productDetails_set_details", {
          courseId: params.courseId
        })
      );
    });

    return Promise.all([productDetails]);
  }
};
</script>

<style>
</style>
