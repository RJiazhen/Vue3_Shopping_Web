<template>
  <div style="background-color: #F4F4F4;">
    <!-- Home页面专用组件 -->
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor , index) in home.floorList" :key="index" :floor-info="floor"/>
    <Brand />
    <!-- Home页面专用组件 -->
  </div>
</template>
<script setup lang="ts">
// 引入组件
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";

// 引入home获取floor数据
import { useHome } from "@/stores/home"

const home = useHome()
home.getFloorList()

</script>

<style lang="scss">
.focus-heigh {
  height: 470px;
}
</style>
