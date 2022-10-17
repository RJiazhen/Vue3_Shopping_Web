<template>
  <div class="container">
    <!--banner轮播-->
    <swiper :modules="modules" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :pagination="{
      clickable:true
    }" :loop="true" :navigation="true">
      <swiper-slide v-for="(item, index) in props.bannerItems" :key="index">
        <div>
          <a :href="item.link"><img :src="item.img" /></a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">

import { defineProps } from "vue"

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/autoplay"
import "swiper/css/pagination";
import "swiper/css/navigation";

const props = defineProps<{
  bannerItems: object[] //接受图片地址
}>()

// 轮播图相关的组件
let modules = [Pagination, Autoplay, Navigation]

</script>

<style lang="scss">
.container {
  position: relative;

  .swiper {
    --swiper-navigation-size: 8px;
    --swiper-navigation-color: rgba(255, 255, 255, .8);

    .swiper-button-prev {
      height: 35px;
      width: 25px;

      position: absolute;
      left: -2px;
      background-color: rgba(0, 0, 0, .3);

      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;

      font-weight: 1000;

    }

    .swiper-button-next {
      height: 35px;
      width: 25px;

      position: absolute;
      right: -2px;
      background-color: rgba(0, 0, 0, .3);

      border-top-left-radius: 18px;
      border-bottom-left-radius: 18px;

      font-weight: 1000;

    }
  }
}
</style>
