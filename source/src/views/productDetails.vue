<template>
    <div class="productDetails">
      <div class="goBack">
        <a @click="goBack" href="javascript:;"><i class="icon icon-chevron-left"></i></a>
      </div>
      <ProductDetailsCard :option="productDetails.details" />
    </div>
</template>

<script>
import ProductDetailsCard from "../components/ProductDetailsCard";
import { mapGetters } from "vuex";
export default {
  title: "产品详情",
  computed: {
    ...mapGetters(["productDetails"])
  },
  methods: {
    goBack() {
      window.history.back();
    }
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
  },
  components: {
    ProductDetailsCard
  }
};
</script>

<style lang="less" scoped>
.productDetails {
  position: relative;
  > .goBack {
    @size: 56px;
    position: absolute;
    z-index: 99;
    left: 20px;
    top: 20px;
    width: @size;
    height: @size;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    > a {
      display: block;
      width: @size;
      height: @size;
      line-height: @size;
      text-align: center;
      font-size: 36px;
      color: #fff;
      > i {
        position: relative;
        top: 3px;
      }
    }
  }
}
</style>

