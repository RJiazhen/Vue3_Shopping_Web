<template>
  <div class="trade-container">
    <div class="title">
      <h1>填写并核对订单信息</h1>
    </div>
    <div class="content">
      <!-- 收件人信息 -->
      <div class="receive">
        <h5>收件人信息</h5>
        <div class="address clearFix" v-for="(address, index) in addressList" :key="index">
          <span class="select-btn " :class="{
            selected: address.isDefault == '1'
          }">{{ address.consignee }}</span>
          <p @click="changeDefault(address)">
            <span class="s1">{{ address.fullAddress }}</span>
            <span class="s2">{{ address.phoneNum }}</span>
            <span class="s3" v-show="address.isDefault == '1'">默认地址</span>
          </p>
        </div>
      </div>
      <div class="line"></div>

      <!-- 支付方式 -->
      <div class="pay">
        <h5>支付方式</h5>
        <div class="address clearFix">
          <span class="select-btn selected">在线支付</span>
          <span class="select-btn" style="margin-left:5px;">货到付款</span>
        </div>
      </div>

      <div class="line"></div>
      <!-- 送货清单 -->
      <div class="sku-list">
        <h5>送货清单</h5>
        <div class="way">
          <h5>配送方式</h5>
          <div class="info clearFix">
            <span class="s1">天天快递</span>
            <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
          </div>
        </div>
        <!-- 商品清单 -->
        <div class="detail">
          <h5>商品清单</h5>
          <ul class="list clearFix" v-for="(detailArray, index) in detailArrayList" :key="detailArray.skuId">
            <li>
              <img :src="detailArray.imgUrl">
            </li>
            <li>
              <p>
                {{ detailArray.skuName }}</p>
              <h4>7天无理由退货</h4>
            </li>
            <li>
              <h3>￥{{ detailArray.orderPrice }}</h3>
            </li>
            <li>X1</li>
            <li>有货</li>
          </ul>
        </div>
      </div>
      <!-- 买家留言 -->
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea placeholder="  建议留言前先与商家沟通确认" class="remarks-cont" v-model="msg"></textarea>
      </div>
      <div class="line"></div>
      <!-- 发票信息 -->
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <!-- 总价计算 -->
    <div class="money clearFix">
      <ul>
        <li>
          <b><i>1</i>件商品，总商品金额</b>
          <span>¥5399.00</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <!-- 应付金额和地址 -->
    <div class="trade">
      <div class="price">应付金额:　<span>¥5399.00</span></div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ defaultAddress.fullAddress }}</span>
        收货人：<span>{{ defaultAddress.consignee }}</span>
        <span>15010658793</span>
      </div>
    </div>
    <!-- 提交订单按钮 -->
    <div class="sub clearFix">
      <a @click="submitOrder" class="subBtn">提交订单</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTrade } from "@/stores/trade"
import { computed } from '@vue/reactivity';
import { useRouter } from "vue-router"
import { reqSubmitOrder } from "@/api/index" // 直接在组件内提交请求，而不是通过store

const router = useRouter()

const trade = useTrade()
// #region 获取用户地址信息
const addressList = ref<Array<address>>()
onMounted(() => {
  trade.getAddress()
  addressList.value = trade.addressList
})
// #endregion

// #region 默认地址与修改方法
// 修改默认地址
const changeDefault = (address: address) => {
  addressList.value.forEach(item => {
    item.isDefault = '0'
  });
  address.isDefault = '1'
}
// 默认地址
const defaultAddress = computed(() => {
  return addressList.value?.find(item => item.isDefault == '1') || <address>{}
})
// #endregion

// #region 订单信息
const detailArrayList = computed((): orderInfo["detailArrayList"] => {
  return trade.orderInfo?.detailArrayList || <orderInfo['detailArrayList']>[]
})
onMounted(() => {
  trade.getOrderInfo()
})
// #endregion

// #region 买家留言系统
const msg = ref('')
// #endregion

// #region 提交订单
const submitOrder = async () => {
  // 交易编码
  let tradeNo = trade.orderInfo.tradeNo || Number
  // 交易数据
  let data = {
    consignee: defaultAddress.value.consignee, // 收件人姓名
    consigneeTel: defaultAddress.value.phoneNum, // 收件人电话
    deliverAddress: defaultAddress.value.fullAddress, // 收件地址
    paymentWay: "ONLINE", //支付方式
    orderComment: msg.value, // 买家留言
    orderDetailList: detailArrayList.value // 商品列表
  }

  let result = await reqSubmitOrder(tradeNo, data)
  // 提交订单成功
  if (result.code == 200) {
    // 订单编号
    let orderId = result.data
    router.push({ name: 'pay', query: { orderId: orderId } })
  }
  // 提交订单失败
  else {
    alert(result.data)
  }
}
// #endregion

</script>

<style scoped lang="scss">
.trade-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 1000px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
  }

  .content {
    width: 1000px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 10px 25px;
    box-sizing: border-box;
    text-align: left;

    // 各部分标题
    .receive,
    .pay,
    .list,
    .sku-list {
      width: 900px;

      h5 {
        line-height: 36px;
        margin-top: 5px;
      }
    }

    // 收件人信息
    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .select-btn {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .select-btn::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .select-btn.selected {
        border-color: #e1251b;
      }

      .select-btn.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;

        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    // 分割线
    .line {
      height: 1px;
      background-color: #ddd;
    }

    // 送货清单
    .sku-list {

      // 配送方式
      .way {
        height: 110px;
        padding-left: 15px;

        h5 {
          margin-top: 0;
        }

        .info {
          margin-top: 10px;

          .s1 {
            float: left;
            border: 1px solid #ddd;
            width: 120px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin-right: 10px;
          }

          p {
            line-height: 30px;
          }
        }
      }

      // 商品清单
      .detail {
        background: #feedef;
        padding: 0 15px;
        margin: 2px auto 0;

        h5 {
          line-height: 50px;
        }

        .list {
          display: flex;
          justify-content: space-between;
          height: 100px;

          li {
            line-height: 30px;

            img {
              height: 90px;
            }

            p {

              margin-bottom: 20px;
            }

            h4 {
              color: #c81623;
              font-weight: 400;
            }

            h3 {

              color: #e12228;
            }
          }
        }
      }
    }

    // 买家留言
    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1000px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1000px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1000px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>
