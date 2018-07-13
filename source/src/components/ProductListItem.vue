<template>
<div class="J_ProductListItem">
    <router-link :to="{ name: 'productDetails' , params: { courseId: option.item.courseId } }" class="inner">
        <div class="cover">
            <img :src="option.item.cover" :alt="option.item.title">
        </div>
        <div class="details clearfix">
            <div class="title">{{ option.item.title }}</div>
            <!-- <div class="intro">{{ computedIntro }}</div> -->
            <div class="price" v-if="option.item.price == '0.00'"><b>免费</b></div>
            <div class="price" v-else><span>￥</span><b>{{ option.item.price }}</b></div>
            <div class="labelList">
                <div v-for="item in computedLabel" class="item">{{ item }}</div>
            </div>
        </div>
    </router-link>
</div>
</template>

<script>
export default {
  props: ["option"],
  computed: {
    computedIntro() {
      var result = "";
      var { item } = this.option;
      var intro = item.intro.replace(/<[^>]+>|&nbsp;/g, "");
      var gradeName = item.gradeName.split("|").join("、");
      var orgName = item.orgName;
      var teacherName = item.teacherName;
      if (intro) {
        result = intro;
      } else {
        result = `本教材是由${orgName}机构中的${teacherName}老师根据,目前${gradeName}的在读学生原则编写而成。`;
      }
      return result;
    },
    computedLabel() {
      var result = [];
      var { item } = this.option;
      var subjectName = item.subjectName.split("|");
      var gradeName = item.gradeName.split("|");

      if (subjectName.length) {
        subjectName.forEach(item => result.push(item));
      }

      if (gradeName.length) {
        gradeName.forEach(item => result.push(item));
      }

      return result;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_ProductListItem {
  > .inner {
    display: block;
    > .cover {
      > img {
        width: 100%;
        height: 160px;
        border-radius: @br;
      }
    }
    > .details {
      padding: 0 10px 10px 10px;
      > .title {
        margin: 10px 0 6px;
        width: 100%;
        .text-overflow();
        font-size: 22px;
        color: @color2;
      }
      > .intro {
      }
      > .price {
        float: left;
        > span {
          font-size: 16px;
          color: #f60;
        }
        > b {
          font-size: 22px;
          color: #f60;
        }
      }
      > .labelList {
        float: right;
        margin-top: 6px;
        > .item {
          display: inline-block;
          margin-left: 6px;
          padding: 0 10px;
          .linear-gradient();
          border-radius: @br;
          font-size: 14px;
          color: @color9;
        }
      }
    }
  }
}
</style>
