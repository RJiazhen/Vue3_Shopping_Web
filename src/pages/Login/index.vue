<template>
  <div>
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="##" style="border-right: 0;">扫描登录</a>
            </li>
            <li>
              <a href="##" class="current">账户登录</a>
            </li>
          </ul>

          <div class="content">
            <Form action="##" @submit.prevent>
              <div class="input-text clearFix">
                <i></i>
                <Field name="phone" rules="phone" type="text" placeholder="手机号" v-model="phone" />
                <ErrorMessage class="error-msg" name="phone"></ErrorMessage>
              </div>

              <div class="input-text clearFix">
                <i class="pwd"></i>
                <Field name="password" rules="loginPassword" type="password" placeholder="请输入密码" v-model="password" />
                <ErrorMessage name="password" class="error-msg" />
              </div>

              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2">
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" @click="userLogin">登&nbsp;&nbsp;录</button>

            </Form>
            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt=""></li>
                <li><img src="./images/sina.png" alt=""></li>
                <li><img src="./images/ali.png" alt=""></li>
                <li><img src="./images/weixin.png" alt=""></li>
              </ul>
              <Router-link to="register" class="register">立即注册</Router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

import { useUser } from "@/stores/user"
// 引入校验用的插件以及校验规则
import { Form, Field, ErrorMessage } from "vee-validate"

import router from "@/router";
const route = useRoute()
const user = useUser()
// 手机号
const phone = ref<number>()
// 密码
const password = ref<string>()
// 登录回调函数
const userLogin = async() => {
  try {
    // 这里使用异步方法等待登录操作完成了才进行路由的跳转
    (phone && password) && await user.userLogin({ phone: phone.value, password: password.value })
    // 登录成功后判断路径中是否有重定向的query参数，如果有则跳转到对应的地址
    let toPath = route.query.redirect || '/home'
    router.push({ path: toPath })
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped lang="scss">
.login-wrap {
  height: 487px;

  .login {
    width: 1000px;
    height: 487px;
    margin: 0 auto;
    background: url(./images/loginbg.png) no-repeat;
  }

  .loginform {
    width: 420px;
    height: 406px;
    box-sizing: border-box;
    background: #fff;
    float: right;
    top: 45px;
    position: relative;
    padding: 20px;


    .tab {

      li {
        width: 50%;
        float: left;
        text-align: center;

        a {
          width: 100%;
          display: block;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 700;
          color: #333;
          border: 1px solid rgb(206, 205, 205);
          box-sizing: border-box;
          text-decoration: none;

        }

        .current {
          border-bottom: none;
          border-top-color: #28a3ef;
          color: #e1251b;
        }
      }
    }

    .content {
      width: 380px;
      height: 316px;
      box-sizing: border-box;
      border: 1px solid rgb(206, 205, 205);
      border-top: none;
      padding: 18px;

      form {
        margin: 15px 0 18px 0;
        font-size: 12px;
        line-height: 18px;

        .input-text {
          margin-bottom: 22px;
          position: relative;

          i {
            float: left;
            width: 37px;
            height: 32px;
            border: 1px solid rgb(206, 205, 205);
            background: url(@/assets/icons.png) no-repeat -10px -201px;
            box-sizing: border-box;
            border-radius: 2px 0 0 2px;
          }

          .pwd {
            background-position: -72px -201px;
          }

          input {
            width: 302px;
            height: 32px;
            box-sizing: border-box;
            border: 1px solid rgb(206, 205, 205);
            border-left: none;
            float: left;
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 14px;
            line-height: 22px;
            padding-right: 8px;
            padding-left: 8px;

            border-radius: 0 2px 2px 0;
            outline: none;
          }

          .error-msg {
            position: absolute;
            top: 100%;
            left: 40px;
            color: red;
          }
        }

        .setting {
          label {
            float: left;
          }

          .forget {
            float: right;
          }
        }

        .btn {
          background-color: #e1251b;
          padding: 6px;
          border-radius: 0;
          font-size: 16px;
          font-family: 微软雅黑;
          word-spacing: 4px;
          border: 1px solid #e1251b;
          color: #fff;
          width: 100%;
          height: 36px;
          margin-top: 25px;
          outline: none;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .call {
        margin-top: 30px;

        ul {
          float: left;

          li {
            float: left;
            margin-right: 5px;
          }
        }

        .register {
          float: right;
          font-size: 15px;
          line-height: 38px;
        }

        .register:hover {
          color: #4cb9fc;
          text-decoration: underline;
        }
      }

    }
  }
}

.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;

  ul {
    li {
      display: inline-block;
      border-right: 1px solid #e4e4e4;
      padding: 0 20px;
      margin: 15px 0;
    }
  }
}
</style>
