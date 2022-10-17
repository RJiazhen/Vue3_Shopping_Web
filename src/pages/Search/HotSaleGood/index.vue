<template>
  <li>
    <div class="list-wrap">
      <div class="p-img">
        <img src="./images/like_01.png" />
      </div>
      <div class="attr">
        <em>Apple苹果iPhone 6s (A1699)</em>
      </div>
      <div class="price">
        <strong>
          <em>¥</em>
          <i>4088.00</i>
        </strong>
      </div>
      <div class="commit">
        <i class="command">已有700人评价</i>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
li {
  width: 25%;
  height: 100%;

  .list-wrap {

    .p-img,
    .price,
    .attr,
    .commit {
      padding-left: 15px;
    }

    .p-img {
      img {
        max-width: 100%;
        vertical-align: middle;
        border: 0;
      }
    }

    .attr {
      width: 85%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 8px;
      min-height: 38px;
      cursor: pointer;
      line-height: 1.8;
    }

    .price {
      font-size: 18px;
      color: #c81623;

      strong {
        font-weight: 700;

        i {
          margin-left: -5px;
        }
      }
    }

    .commit {
      height: 22px;
      font-size: 13px;
      color: #a7a7a7;
    }
  }
}
</style>
