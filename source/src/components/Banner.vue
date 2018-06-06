<template>
    <div class="J_banner">
        <div ref="container" class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="(item,index) in option" class="swiper-slide">
                    <a href="javascript:;">
                        <img :src="item" :alt="item">
                    </a>
                </div>
            </div>
            <!-- Add Pagination -->
            <div ref="pagination" class="swiper-pagination"></div>
            <!-- Add Arrows -->
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "../assets/less/swiper.less";

export default {
  swiper: null,
  props: ["option"],
  data() {
    return {};
  },
  mounted() {
    var _this = this;

    this.$nextTick(() => {
      this.swiper = new Swiper(this.$refs.container, {
        loop: true,
        loopedSlides: this.option.length,
        autoplay: {
          delay: 3000 //1秒切换一次
        },
        slidesPerView: 1.1,
        centeredSlides: true,
        grabCursor: true,
        pagination: {
          el: this.$refs.pagination,
          clickable: true
        }
      });
    });
  },
  beforeDestroy() {
    this.swiper.autoplay.stop();
    this.swiper = null;
  }
};
</script>

<style lang="less" scoped>
@import "../assets/less/common.less";
.J_banner {
  > .swiper-container {
    > .swiper-wrapper {
      .swiper-slide {
        transition: transform 0.2s ease-in;
        transform: scale(0.94);
        opacity: 0.9;
        a {
          display: block;
          border-radius: @br;
          overflow: hidden;
          img {
            margin-left: -300px;
            height: 260px;
            vertical-align: top;
          }
        }
        &.swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }
}
</style>
