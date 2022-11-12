<template>
  <div class="container">
    <div class="swiper-btn swiper-btn-prev">
      <ArrowLeftBold class="icon" />
    </div>
    <div class="swiper-btn swiper-btn-next">
      <ArrowRightBold class="icon" />
    </div>
    <swiper :modules="modules" :freeMode="true" :spaceBetween="10" :slidesPerView="5">
      <swiper-slide v-for="(num, index) in 11" :key="index">
        <a href="#"><img src="../images/s1.png"></a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const modules = [FreeMode]
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

          &:hover {
            border: 1px solid #f60;
          }
        }
      }
    }
  }
}
</style>
