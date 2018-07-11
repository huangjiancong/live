<template>
<div class="index">

    <HeaderHolder :option="index.gradeAndSubject">
        <Banner :option="index.banner" />
    </HeaderHolder>

    <Caption option="最新课程" />
    <ProductList :option="index.newCourse" />

</div>
</template>

<script>
import Caption from "../components/Caption";

import HeaderHolder from "../components/HeaderHolder";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

import { mapGetters } from "vuex";

export default {
  title: "首页",
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
    Caption,
    HeaderHolder,
    Banner,
    ProductList
  }
};
</script>
