<template>
    <div class="J_banner">
        <div ref="container" class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="(item,index) in option" class="swiper-slide">
                    <a href="javascript:;">
                        <img :src="item.pictureUrl" :alt="item.title">
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
import Swiper from 'swiper'
import '../assets/less/swiper.less'

export default {
    swiper: null,
    data() {
        return {
            option: []
        }
    },
    mounted() {

        var _this = this;

        this.$event.on(this, 'setup', (option) => {

            var tmp = [
                'http://x04.xesimg.com/web/2018/04/20/15242105978472.jpg',
                'http://s03.xesimg.com/web/2018/03/26/15220327577473.jpg',
                'http://r04.xesimg.com/web/2018/04/20/15242124782690.jpg',
                'http://s03.xesimg.com/web/2018/04/24/15245639172076.jpg',
                'http://x02.xesimg.com/web/2018/04/19/15241257731866.jpg',
                'http://r02.xesimg.com/web/2018/05/02/15252418488680.jpg',
                'http://x03.xesimg.com/web/2018/04/13/15235890277649.jpg',
                'http://r01.xesimg.com/web/2018/04/27/15248381132538.jpg'
            ]

            option.forEach((item, index) => {
                item.pictureUrl = tmp[index];
            });

            this.option = option;

            this.$nextTick(() => {
                this.swiper = new Swiper(this.$refs.container, {
                    loop: true,
                    loopedSlides: option.length,
                    autoplay: {
                        delay: 3000,//1秒切换一次
                    },
                    slidesPerView: 1.1,
                    centeredSlides: true,
                    grabCursor: true,
                    pagination: {
                        el: this.$refs.pagination,
                        clickable: true
                    }
                });
                console.log(this.swiper)
            });

        });

    },
    beforeDestroy() {
        this.swiper.autoplay.stop();
        this.swiper = null;
    }

}
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
