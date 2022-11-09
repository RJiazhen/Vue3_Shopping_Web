<template>
  <!--bread-->
  <div class="bread">
    <ul class="fl sui-breadcrumb">
      <li>
        <a href="#">全部结果</a>
      </li>
    </ul>
    <ul class="fl sui-tag">
      <!-- 分类的面包屑 -->
      <li class="with-x" v-show="categoryName">{{ categoryName }}<i @click="$emit('removeCategoryName')">×</i></li>
      <!-- 关键字的面包屑 -->
      <li class="with-x" v-show="keyword">{{ keyword }}<i @click="$emit('clearKeyword')">×</i></li>
      <!-- 品牌的面包屑 -->
      <li class="with-x" v-show="trademark">{{ trademark ? trademark.split(":")[1] : trademark }}<i
          @click="$emit('removeTrademark')">×</i></li>
      <!-- 筛选属性的面包屑 -->
      <li class="with-x" v-show="searchProps != []" v-for="(prop, index) in searchProps" :key="index">{{
          prop.split(":")[1]
      }}
        <i @click="$emit('removeProp', index)">×</i>
      </li>

    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';


// 分类名称计算属性
const props = defineProps<{
  searchParams,
}>()
const categoryName = computed(() => props.searchParams.categoryName)
const keyword = computed(() => props.searchParams.keyword)
const trademark = computed(() => props.searchParams.trademark)
const searchProps = computed(() => props.searchParams.props)
</script>

<style lang="scss">
.bread {
  margin-bottom: 5px;
  overflow: hidden;

  .sui-breadcrumb {
    padding: 3px 15px;
    margin: 0;
    font-weight: 400;
    border-radius: 3px;
    float: left;

    li {
      display: inline-block;
      line-height: 18px;

      a {
        color: #666;
        text-decoration: none;

        &:hover {
          color: #4cb9fc;
        }
      }
    }
  }

  .sui-tag {
    margin-top: -5px;
    list-style: none;
    font-size: 0;
    line-height: 0;
    padding: 5px 0 0;
    margin-bottom: 18px;
    float: left;

    .with-x {
      font-size: 12px;
      margin: 0 5px 5px 0;
      display: inline-block;
      overflow: hidden;
      color: #000;
      background: #f7f7f7;
      padding: 0 7px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #dedede;
      white-space: nowrap;
      transition: color 400ms;
      cursor: pointer;

      i {
        margin-left: 10px;
        cursor: pointer;
        font: 400 14px tahoma;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }

      &:hover {
        color: #28a3ef;
      }
    }
  }
}
</style>
