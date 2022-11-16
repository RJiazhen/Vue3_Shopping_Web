<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3>
        <SuccessFilled style="width: 15px;height: 15px;" />
        商品已成功加入购物车！
      </h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img :src="info.skuDefaultImg">
          </div>
          <div class="right-info">
            <p class="title">{{ info.skuName }}</p>
            <p class="attr">{{ info.skuDesc }} / 数量:{{ route.query.skuNum }}</p>
          </div>
        </div>
        <div class="right-gocart">
          <router-link class="sui-btn btn-xlarge" :to="`/detail/${info.id}`">查看商品详情</router-link>
          <router-link to="/cart">去购物车结算 > </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
// 从本地存储获取商品信息
const info = JSON.parse(sessionStorage.getItem("SKUINFO"))

</script>
<style lang="scss" scoped>
.cart-complete-wrap {
  background-color: #f4f4f4;

  .cart-complete {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 0 20px;

    h3 {
      font-weight: 400;
      font-size: 16px;
      color: #6aaf04;
      padding-top: 15px;
      padding-bottom: 15px;
      margin: 0;

    }

    .goods {
      overflow: hidden;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-good {

        .left-pic {
          border: 1px solid #dfdfdf;
          width: 60px;
          float: left;

          img {
            width: 60px;
            height: 60px;
          }
        }

        .right-info {
          color: #444;
          float: left;
          margin-left: 10px;

          display: flex;
          flex-direction: column;
          text-align: left;

          .title {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
          }

          .attr {
            width: 90%;
            color: #aaa;
          }
        }
      }

      .right-gocart {
        float: right;

        a {
          padding: 7px 36px;
          font-size: 15px;
          line-height: 22px;
          color: #333;
          background-color: #eee;
          text-decoration: none;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
        }

        a:hover {
          background-color: #f7f7f7;
          border: 1px solid #eaeaea;
        }

        a:active {
          background-color: #e1e1e1;
          border: 1px solid #d5d5d5;
        }

        .btn-danger {
          background-color: #e1251b;
          color: #fff;
        }

        .btn-danger:hover {
          background-color: #e1251b;
        }
      }

    }
  }
}
</style>
