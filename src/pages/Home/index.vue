<template>
  <div style="background-color: #F4F4F4;">
    <TypeNav /> <!-- 引入分类导航栏这个全局组件 -->
    <!-- Home页面专用组件 -->
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
    <!-- Home页面专用组件 -->
  </div>
</template>
<script lang="ts">
// 引入组件
import TypeNav from "./TypeNav/index.vue"
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";

export default {
  name: "Home",
  data() {
    return {
    }
  },
  // 注册组件
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand, TypeNav },
};
</script>
<style lang="scss">
.focus-heigh {
  height: 470px;
}
</style>
