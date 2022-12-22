<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="province">
          <Location style="width: 12px; height: 12px; margin-right: 8px; color: #F10215" />
          西藏
        </div>
        <div class="typeList">
          <!-- 未登录 -->
          <span v-if="!userName">
            <a to="/login">你好，请登录</a>
          </span>
          <span class="register" v-if="!userName">
            <a to="/register">免费注册</a>
          </span>

          <!-- 已登录 -->
          <span v-if="userName">
            <a to="/login">{{ userName }}</a>
          </span>
          <span class="register" v-if="userName">
            <a @click="logout">退出登录</a>
          </span>

          <span>
            <a @click="router.push('center')">我的订单</a>
          </span>
          <span>
            <a @click="router.push('cart')">我的购物车</a>
          </span>
          <span>
            <a @click="router.push('center')">个人中心</a>
          </span>
          <span>
            <a @click="router.push('/')">会员中心</a>
          </span>
          <span>
            <a @click="router.push('/')">企业采购</a>
          </span>
          <span>
            <a @click="router.push('/')">网站导航</a>
          </span>
          <span>
            <a @click="router.push('/')">手机端</a>
          </span>
          <span>
            <a @click="router.push('/')">网站无障碍</a>
          </span>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <div :class="showText ? 'logo-n-text' : 'only-logo'">
        <h1>
          <a to="/home" class="logo" title="西西">
            <img src="./images/logo.png">
          </a>
        </h1>
        <!-- 分类导航 -->
        <div class="text-n-type-nav">
          <TypeNav></TypeNav>
        </div>
      </div>

      <div class="right-area">
        <div class="search-n-cart">
          <div class="searchArea">
            <!-- 搜索输入区域 -->
            <!-- 这里使用@submit.prevent阻止默认的提交表单事件，并且给input的enter键弹起绑定搜索事件 -->
            <form action="###" class="searchForm" @submit.prevent>
              <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="searchText"
                @keyup.enter="toSearch" />
              <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
            </form>
            <!-- 搜索推荐 -->
            <div class="search-recommend">
              <ul>
                <li>
                  <a @click="router.push('/')">浪琴</a>
                </li>
                <li>
                  <a @click="router.push('/')">镇店电脑</a>
                </li>
                <li>
                  <a @click="router.push('/')">保暖服饰</a>
                </li>
                <li>
                  <a @click="router.push('/')">爆款手机</a>
                </li>
                <li>
                  <a @click="router.push('/')">99元11件</a>
                </li>
                <li>
                  <a @click="router.push('/')">企采超市</a>
                </li>
                <li>
                  <a @click="router.push('/')">iphone14</a>
                </li>
              </ul>
            </div>

          </div>
          <a class="cart" to="/cart">
            <el-icon style="width: 15px;height:15px; color:#F10215">
              <ShoppingCart />
            </el-icon>
            <span class="cart-count">{{ cartCount }}</span>
            <span>我的购物车</span>
          </a>
        </div>
        <!-- 快捷方式 -->
        <div class="short-cut">
          <ul>
            <li>
              <a @click="router.push('/')">西西超市</a>
            </li>
            <li>
              <a @click="router.push('/')">秒杀</a>
            </li>
            <li>
              <a @click="router.push('/')">家电卖场</a>
            </li>
            <li>
              <a @click="router.push('/')">生鲜果蔬</a>
            </li>
            <li>
              <a @click="router.push('/')">优惠券</a>
            </li>
            <li>
              <a @click="router.push('/')">西西会员</a>
            </li>
            <li>
              <a @click="router.push('/')">拍卖</a>
            </li>
            <li>
              <a @click="router.push('/')">品牌闪购</a>
            </li>
            <li>
              <a @click="router.push('/')">家装百货</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import TypeNav from "@/pages/Home/TypeNav/index.vue"
import { computed } from "@vue/reactivity";
import { ref, onMounted, getCurrentInstance, onBeforeUnmount } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useUser } from "@/stores/user"
import { useCart } from "@/stores/cart"

import _ from "lodash"

const router = useRouter()
const route = useRoute()
const user = useUser()
const cart = useCart()

// 全局事件总线
const $bus = getCurrentInstance().appContext.config.globalProperties.$bus

// #region 展示用户信息
const userName = computed(() => {
  return user.userInfo?.name
})
// #endregion

// #region 退出登录
const logout = async () => {
  try {
    await user.userLogout()
    // 如果退出成功，则返回首页
    router.push({ name: 'home' })
  } catch (error) {
    alert(error.message)
  }
}
// #endregion

// 控制是否显示“全部分类”
const showText = computed(() => {
  if (route.path !== '/home' && route.path !== '/') {
    return true
  }
  else {
    return false
  }
})

// 搜索用的关键字，以及配套的清除方法
let searchText = ref("");
onMounted(() => {
  $bus.on('clearKeyword', () => {
    searchText.value = ""
  })
  $bus.emit('clearKeyword')
})
onBeforeUnmount(() => {
  $bus.off('clearKeyword')
})

// 搜索用的方法，携带参数跳转到Search路由
const toSearch = function () {
  let locations: any = {
    name: "search",
    params: { keyword: searchText.value || undefined },
  };

  //确定路径当中有query参数
  if (route.query.categoryName) {
    locations.query = route.query;
  }
  router.push(locations);
}

// #region 显示购物车中商品数量
const cartCount = computed(() => {
  let count = 0
  cart.cartInfoList.forEach((item) => {
    count += item.skuNum
  })
  return count
})

//#endregion
</script>
<style lang="scss">
.header {
  background-color: #fff;

  &>.top {
    display: flex;
    justify-content: center;

    height: 30px;
    line-height: 30px;

    background-color: #eaeaea;

    .container {
      display: flex;

      min-width: 1000px;

      margin: 0 10px;
      overflow: hidden;

      .province {
        width: 50px;
        display: flex;

        align-items: center;
      }

      .typeList {
        margin-left: 300px;

        span {
          padding: 0 10px;

          &+span {
            border-left: 1px solid #b3aeae;
          }
        }

        .register {
          border-left: none;
          color: #f10215;
        }
      }
    }
  }

  &>.bottom {
    height: 140px;
    width: 1000px;

    display: flex;
    margin: 0 auto;

    .only-logo {
      position: relative;
      width: 265px;
      height: 145px;

      h1 {
        .logo {
          img {
            width: 175px;
            margin: 25px;
          }
        }
      }
    }

    .logo-n-text {
      position: relative;
      width: 265px;
      height: 145px;

      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        .logo {
          img {
            width: 175px;
            margin: 25px;
          }
        }
      }
    }

    .right-area {
      padding-top: 30px;

      .search-n-cart {
        display: flex;

        .searchArea {
          .searchForm {
            overflow: hidden;

            input {
              box-sizing: border-box;
              width: 490px;
              height: 35px;
              padding: 0px 4px;
              border: 2px solid #ea4a36;
              float: left;

              &:focus {
                outline: none;
              }
            }

            button {
              height: 35px;
              width: 68px;
              background-color: #ea4a36;
              border: none;
              color: #fff;
              float: left;
              cursor: pointer;

              &:focus {
                outline: none;
              }
            }
          }

          // 搜索推荐
          .search-recommend {
            margin-top: 7px;
            color: #999999;

            ul {
              display: flex;
              flex-wrap: nowrap;

              li {
                &+li {
                  margin-left: 8px;
                }
              }
            }
          }
        }

        .cart {
          position: relative;

          width: 130px;
          height: 35px;
          margin-left: 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          background-color: #fff;
          border: #eeeeee 1px solid;

          el-icon {
            margin-right: 15px;
          }

          .cart-count {
            position: absolute;
            top: 5px;
            left: 30px;

            width: 17px;
            height: 12px;

            font-size: 12px;
            line-height: 12px;
            color: #fff;

            background-color: #e1251b;
            border-radius: 7px;
          }
        }
      }

      .short-cut {
        margin-top: 20px;

        ul {
          display: flex;
          flex-wrap: nowrap;

          li {
            font-size: 15px;

            &+li {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
