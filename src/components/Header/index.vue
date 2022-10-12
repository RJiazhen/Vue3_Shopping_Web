<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="province">
          <Location style="width: 12px; height: 12px; margin-right: 8px; color: #F10215" />
          广西
        </div>
        <div class="typeList">
          <span>
            <router-link to="/login">你好，请登录</router-link>
          </span>
          <span class="register">
            <router-link to="/register">免费注册</router-link>
          </span>
          <span>
            <router-link to="/">我的订单</router-link>
          </span>
          <span>
            <router-link to="/">我的购物车</router-link>
          </span>
          <span>
            <router-link to="/">我的京东</router-link>
          </span>
          <span>
            <router-link to="/">京东会员</router-link>
          </span>
          <span>
            <router-link to="/">企业采购</router-link>
          </span>
          <span>
            <router-link to="/">网站导航</router-link>
          </span>
          <span>
            <router-link to="/">手机京东</router-link>
          </span>
          <span>
            <router-link to="/">网站无障碍</router-link>
          </span>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="京东" target="_blank">
          <img src="./images/logo.png">
        </router-link>
      </h1>
      <div class="right-area">
        <div class="search-n-cart">
          <div class="searchArea">
            <!-- 搜索输入区域 -->
            <form action="###" class="searchForm">
              <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="searchText" />
              <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
            </form>
            <!-- 搜索推荐 -->
            <div class="search-recommend">
              <ul>
                <li>
                  <route-link>浪琴</route-link>
                </li>
                <li>
                  <route-link>镇店电脑</route-link>
                </li>
                <li>
                  <route-link>保暖服饰</route-link>
                </li>
                <li>
                  <route-link>爆款手机</route-link>
                </li>
                <li>
                  <route-link>99元11件</route-link>
                </li>
                <li>
                  <route-link>企采超市</route-link>
                </li>
                <li>
                  <route-link>iphone14</route-link>
                </li>
              </ul>
            </div>

          </div>
          <div class="cart">
            <el-icon>
              <ShoppingCart style="width: 15px;height:15px; color:#F10215" />
              <span class="cart-count" ref="cart-count">1</span>

            </el-icon>
            <span>我的购物车</span>
          </div>
        </div>
        <!-- 快捷方式 -->
        <div class="short-cut">
          <ul>
            <li>
              <route-link>京东五金城</route-link>
            </li>
            <li>
              <route-link>京东超市</route-link>
            </li>
            <li>
              <route-link>秒杀</route-link>
            </li>
            <li>
              <route-link>京东家电</route-link>
            </li>
            <li>
              <route-link>京东生鲜</route-link>
            </li>
            <li>
              <route-link>优惠券</route-link>
            </li>
            <li>
              <route-link>PLUS会员</route-link>
            </li>
            <li>
              <route-link>拍卖</route-link>
            </li>
            <li>
              <route-link>品牌闪购</route-link>
            </li>
            <li>
              <route-link>京东云</route-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    toSearch() {
      this.$router.push({
        name: "search", //在前面加上问号后，keyword这个params可传可不传
        params: {
          keyword: this.searchText || undefined,
        },
        query: {
          b: this.searchText.toUpperCase(),
        },
        // component: Search,
      });
    },
  },
};
</script>
<style lang="scss">
.header {
  & > .top {
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
        display: flex;

        align-items: center;
      }

      .typeList {
        margin-left: 300px;

        span {
          padding: 0 10px;

          & + span {
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

  & > .bottom {
    height: 140px;
    width: 1000px;

    display: flex;

    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
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
                & + li {
                  margin-left: 8px;
                }
              }
            }
          }
        }
        .cart {
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
            position: relative;

            .cart-count {
              position: absolute;
              top: -5px;
              right: -10px;

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
      }
      .short-cut {
        margin-top: 20px;
        ul {
          display: flex;
          flex-wrap: nowrap;
          li {
            font-size: 15px;
            & + li {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
