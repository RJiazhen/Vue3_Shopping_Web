<template>
  <div class="main">
    <div class="py-container">
      <Bread></Bread>
      <Selector></Selector>
      <!--details-->
      <div class="details clearfix">
        <Navbar></Navbar>
        <div class="goods-list">
          <ul>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
          </ul>
        </div>
        <div class="fr page">
          <Pagination></Pagination>
        </div>
      </div>
      <!--hotsale-->
      <div class="clearfix hot-sale">
        <h4 class="title">热卖商品</h4>
        <div class="hot-list">
          <ul class="yui3-g">
            <HotSaleGood></HotSaleGood>
            <HotSaleGood></HotSaleGood>
            <HotSaleGood></HotSaleGood>
            <HotSaleGood></HotSaleGood>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bread from "./Bread/index.vue"
import Selector from "./Selector/index.vue"
import Navbar from "./Navbar/index.vue"
import Good from "./Good/index.vue"
import Pagination from "./Pagination/index.vue"
import HotSaleGood from "./HotSaleGood/index.vue"


</script>
<style lang="scss">
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .details {
      margin-bottom: 5px;


      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;


      }
    }

    .hot-sale {
      margin-bottom: 5px;
      border: 1px solid #ddd;

      .title {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        border-bottom: 1px solid #ddd;
        background: #f1f1f1;
        color: #333;
        margin: 0;
        padding: 5px 0 5px 15px;
      }

      .hot-list {
        padding: 15px;

        ul {
          display: flex;


        }
      }
    }
  }
}
</style>
