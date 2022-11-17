<template>
  <!-- 购物车列表 -->
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(good, index) in cart.cartInfoList" :key="good.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="good.isChecked == 1"
              @change="updateChecked(good.skuId, $event.target.checked)">
          </li>
          <li class="cart-list-con2">
            <img :src="good.imgUrl">
            <div class="item-msg">{{ good.skuName }}</div>
          </li>

          <li class="cart-list-con3">
            <span class="price">{{ good.skuPrice }}</span>
          </li>
          <!-- 修改数量功能 -->
          <li class="cart-list-con4">
            <a href="javascript:void(0)" class="mins" @click="changeSkuNum('mins', -1, good)">-</a>
            <input autocomplete="off" type="text" :value="good.skuNum" minnum="1" class="itxt"
              @change="changeSkuNum('input', $event.target.value, good)">
            <a href="javascript:void(0)" class="plus" @click="changeSkuNum('plus', 1, good)">+</a>
          </li>
          <li class="cart-list-con5">
            <span class="sum">{{ good.skuPrice * good.skuNum }}</span>
          </li>
          <li class="cart-list-con6">
            <a class="sindelet" @click="deleteSku(good.skuId)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <!-- 当购物车为空时全选按钮不能按 -->
        <!-- TODO 考虑优化全选按钮体验，让其也能点，但是没有任何实际效果，而不是直接不能点 -->
        <input class="chooseAll" type="checkbox" :disabled="cart.cartInfoList.length < 1" :checked="isAllChecked"
          @change="updateAllChecked($event)">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteCheckedSku()">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useCart } from "@/stores/cart"
import { computed } from '@vue/reactivity';
import { useDetail } from '@/stores/detail';
import throttle from "lodash/throttle";


const cart = useCart()
const detail = useDetail()

// 获取购物车数据
onMounted(() => {
  cart.getCartList()
})

// 总数

// 总价
const totalPrice = computed(() => {
  let sum = 0
  cart.cartInfoList.forEach(item => {
    sum += item.skuNum * item.skuPrice
  })
  return sum
})

// 是否全选，只有全部的isChecked都为1才返回true
const isAllChecked = computed(() => cart.cartInfoList.every(item => item.isChecked == 1))

// 修改商品数量
// 添加节流，以防止用户操作过快造成异常
const changeSkuNum = throttle(async (type, newNum, good) => {
  let disNum = 0
  // 根据不同请求修改disNum
  switch (type) {
    case 'mins':
      // 只有当产品数量大于1时才减1
      disNum = good.skuNum > 1 ? -1 : 0
      break;
    case 'plus':
      disNum = 1
      break;
    case 'input':
      // 如果输入的数据是非法的或<1，则不变
      if (isNaN(newNum * 1) || newNum < 1) {
        disNum = 0
      } else {
        // 如果不是则取整进行计算
        disNum = parseInt(newNum) - good.skuNum
      }
      break;
  }

  // TODO 根据disNum是否为0，判断是否接着执行请求
  if (disNum === 0 && type == 'mins') {
    return
  }
  // 发送请求
  try {
    await detail.addOrUpdateShopCart(good.skuId, disNum)
    // 当成功返回后则重新获取数据
    cart.getCartList()
  } catch (error) { }

}, 500)

// 删除商品
// TODO 添加删除确认弹窗
const deleteSku = async (goodId) => {
  try {
    await cart.deleteCartListBySkuId(goodId)
    cart.getCartList()
  } catch (error) {
    alert(error.massage)
  }
}

// 修改商品勾选状态
// TODO 全选按钮更新慢半拍，考虑在服务器返回结果前就修改
const updateChecked = async (skuId: number, isChecked: number) => {
  try {
    await cart.updateCheckedById(skuId, isChecked ? 1 : 0)
    cart.getCartList()
  } catch (error) {
    alert(error.message)
  }
}

// 删除选定商品
const deleteCheckedSku = async () => {
  try {
    await cart.deleteCheckedSku()
    cart.getCartList()
  } catch (error) {
    alert(error.message)
  }
}

// 修改所有商品选定状态
const updateAllChecked = async (event) => {
  let checked = event.target.checked ? '1' : '0'
  try {
    await cart.updateAllChecked(checked)
    cart.getCartList()
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped lang="scss">
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      &>div {
        float: left;
      }

      .cart-th1 {
        width: 15%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 35%;
      }

      .cart-th3 {
        width: 10%;
      }

      .cart-th4 {
        width: 17%;
      }

      .cart-th5 {
        width: 10%;
      }

      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px 10px 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        &>li {
          float: left;
        }

        .cart-list-con1 {
          padding-top: 5px;
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;
          display: flex;


          img {
            width: 82px;
            height: 82px;
            transform: translateY(-2px);
          }

          .item-msg {
            width: calc(100% - 90px);
            margin: 0 10px;
            text-align: start;
          }
        }


        .cart-list-con3 {
          width: 10%;

        }

        .cart-list-con4 {
          width: 17%;
          translate: 0px -3px;
          display: flex;
          justify-content: center;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con5 {
          width: 10%;

          .sum {
            // font-size: 16px;
          }
        }

        .cart-list-con6 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
