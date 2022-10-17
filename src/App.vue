<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<template>
  <Header style="margin-bottom: 10px;"></Header>
  <router-view></router-view>
  <Footer></Footer>
  <!-- <Footer v-show="$route.meta.showFooter" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f4f4;
}
</style>
