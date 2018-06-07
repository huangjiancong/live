<template>
    <div class="index">

      <div class="bgfff">
          <HeaderHolder :option="index.gradeAndSubject">
              <Banner :option="index.banner" />
          </HeaderHolder>
      </div>
      
      <!-- <div class="mt20">
        <ProductList :option="index.hotCourse" />
      </div> -->

      <div class="mt20">
        <ProductList :option="index.newCourse" />
      </div>
      
    </div>
</template>

<script>
import mixins from "mixins";

import AsyncPanel from "../components/AsyncPanel";
import HeaderHolder from "../components/HeaderHolder";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

import { mapGetters } from "vuex";

export default {
  title: "首页",
  mixins: [mixins],
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

    // var hotCourse = new Promise((resolve, reject) => {
    //   resolve(store.dispatch("index_set_hotCourse"));
    // });

    var newCourse = new Promise((resolve, reject) => {
      resolve(store.dispatch("index_set_newCourse"));
    });

    return Promise.all([gradeAndSubject, newCourse, banner]);
  },
  components: {
    AsyncPanel,
    HeaderHolder,
    Banner,
    ProductList
  }
};
</script>
