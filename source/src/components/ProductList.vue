<template>
    <div class="J_ProductList">
      <div class="inner">
          <div class="list">
              <div v-for="item in option" class="item">
                <ProductListItem :option="{ all : option , item }" />
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import ProductListItem from "./ProductListItem";
export default {
  props: ["option"],
  components: {
    ProductListItem
  }
};
</script>

<style lang="less" scoped>
.J_ProductList {
  > .inner {
    > .list {
      > .item {
        margin-bottom: 20px;
        background-color: #fff;
      }
    }
  }
}
</style>



