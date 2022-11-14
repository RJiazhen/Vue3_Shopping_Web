<template>
  <div class="container">
    <div class="swiper-btn swiper-btn-prev" @click="slidePrev()">
      <ArrowLeftBold class="icon" />
    </div>
    <div class="swiper-btn swiper-btn-next" @click="slideNext()">
      <ArrowRightBold class="icon" />
    </div>
    <swiper @swiper="onSwiper" :modules="modules" :freeMode="true" :spaceBetween="10" :slidesPerView="5">
      <swiper-slide v-for="(img, index) in props.imgList" :key="img.id">
        <a href="#"><img :src="img.imgUrl" :class="{
          active: activedIndex == index
        }" @click="changeActivedIndex(index)"></a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode"
import { ref, getCurrentInstance } from 'vue';

const props = defineProps<{
  imgList: goodsInfo["skuInfo"]["skuImageList"]
}>()

// 轮播图
const modules = [FreeMode]
// 获取swiper实例
// 因为无法通过useSwiper()获取，所以只好使用@swiper事件获取
let thisSwiper = () => { }
const onSwiper = (swiperEle) => {
  thisSwiper = swiperEle
}
// 控制轮播图切换
const slidePrev = () => {
  thisSwiper.slidePrev()
}
const slideNext = () => {
  thisSwiper.slideNext()
}

// 切换激活的图片
let activedIndex = ref(0)
// 全局事件总线，用于通知Zoom组件图片修改
const $bus = getCurrentInstance().appContext.config.globalProperties.$bus
const changeActivedIndex = (index) => {
  activedIndex.value = index
  $bus.emit('getActivedIndex', index)
}

</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-btn {
    position: absolute;
    height: 100%;
    width: 20px;
    background-color: rgba(0, 0, 0, .3);

    .icon {
      width: 15px;
      height: 15px;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }


  .swiper-btn-next {
    right: 0px;

  }

  .swiper-btn-prev {
    left: 0;
  }

  .swiper {
    width: calc(100% - 40px);
    margin: 0;

    .swiper-slide {
      // width: 56px !important;
      height: 56px;

      a {

        img {
          border: 1px solid #ccc;
          width: 54px;
          height: 54px;

          &.active {
            border: 1px solid #f60;
          }
        }
      }
    }
  }
}
</style>
