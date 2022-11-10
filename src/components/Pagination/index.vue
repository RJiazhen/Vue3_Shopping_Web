<template>
  <div class="sui-pagination clearfix">
    <ul>
      <!-- 上 -->
      <button class="prev" :disabled="pageNo == 1" :class="{ disabled: pageNo == 1 }"
        @click="$emit('getPageNo', pageNo - 1)">
        «上一页
      </button>
      <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)">1</button>
      <button disabled v-if="startNumAndEndNum.start > 2">...</button>

      <!-- 中间部分 -->
      <button v-for="(page, index) in startNumAndEndNum.pageRegion" :key="index" :class="{ active: page == pageNo }"
        @click="$emit('getPageNo', page)">{{ page }}</button>

      <!-- 下 -->
      <button disabled class="dotted disabled" v-if="startNumAndEndNum.end != totalPages">...</button>
      <button v-if="startNumAndEndNum.end != totalPages" @click="$emit('getPageNo', totalPages)">{{ totalPages
      }}</button>
      <button class=" next" @click="$emit('getPageNo', pageNo+1)" :disabled="pageNo == totalPages"
        :class="{ disabled: pageNo == totalPages }"> 下一页» </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{
  pageNo: number,
  total: number,
  pageSize: number,
  continues: number,
  totalPages: number
}>()
// 启始和结束的页码范围
const startNumAndEndNum = computed(() => {
  let start: number
  let end: number
  // 当总页数小于连续范围时
  if (props.continues > props.totalPages) {
    start = 1
    end = props.totalPages
  }
  else {
    start = Math.floor(props.pageNo - props.continues / 2 + 1)
    end = Math.floor(props.pageNo + props.continues / 2)
    // 检查计算出来的start和end是否在合理范围
    if (start < 1) {
      start = 1
      end = props.continues
    }
    if (end > props.totalPages) {
      end = props.totalPages
      start = end - props.continues + 1
    }
  }
  // 显示的页数范围
  let pageRegion: Array<number> = []
  for (let i: number = start; i <= end; i++) {
    pageRegion.push(i)
  }
  return { start, pageRegion, end }
})

</script>

<style scoped lang="scss">
.sui-pagination {
  margin: 18px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;

    button {
      min-width: 44px;
      height: 30px;
      line-height: 30px;
      margin-left: 5px;

      background-color: #fff;
      font-size: 14px;
      color: #333;
      border: none;

      cursor: pointer;

      &.active {
        color: #e1251b;
        border-color: #fff;
      }

      &.prev {
        width: 70px;
        background-color: #fafafa;
      }

      &.next {
        width: 70px;
        background-color: #fafafa;
      }

      &.disabled {
        color: #999;
        cursor: default;
      }

      &.dotted {
        span {
          font-size: 18px;
        }
      }
    }
  }

  .props.totalPageNum {
    color: #333;
    font-size: 14px;
    margin-left: 20px;
  }
}
</style>
