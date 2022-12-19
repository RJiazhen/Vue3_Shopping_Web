<template>
  <div class="register">
    <h3>注册新用户
      <span class="go">我有账号，去 <Router-link to="login">登陆</Router-link>
      </span>
    </h3>
    <Form>
      <div class="content">
        <label>手机号:</label>
        <Field name="phone" type="phone" rules="phone" placeholder="请输入你的手机号" v-model="phone" />
        <ErrorMessage class="error-msg" name="phone" />
      </div>
      <div class="content">
        <label>验证码:</label>
        <Field name="code" rules="code" type="text" placeholder="请输入验证码" v-model="code" />
        <button class="get-code" @click="getCode">获取验证码</button>
        <ErrorMessage class="error-msg" name="code" />
      </div>
      <div class="content">
        <label>登录密码:</label>
        <Field name="password" rules="password" type="password" placeholder="请输入你的登录密码" v-model="password" />
        <ErrorMessage class="error-msg" name="password" />
      </div>
      <div class="content">
        <label>确认密码:</label>
        <Field name="confirmPassword" rules="confirmed:@password" type="password" placeholder="请输入确认密码"
          v-model="password1" />
        <ErrorMessage class="error-msg" name="confirmPassword" />
      </div>
      <div class="controls">
        <Field name="agree" rules="agree" type="checkbox" />
        <span>同意协议并注册<a>《用户协议》</a></span>
        <ErrorMessage class="error-msg" name="agree" />
      </div>
      <div class="btn">
        <button @click="userRegister">完成注册</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useUser } from "@/stores/user"
import { useRouter } from "vue-router"

// 引入校验用的插件以及校验规则
import { Form, Field, ErrorMessage } from "vee-validate"

const user = useUser()
const router = useRouter()

// #region 验证码系统
// 手机号和验证码
const phone = ref<number>()
const code = ref<number>()

// 获取验证码
const getCode = async () => {
  try {
    phone && await user.getCode(phone.value)
    // 这里直接填写好验证码了，模拟用户收到验证码并填写上去的过程
    code.value = user.code
  } catch (error) {
    alert(error.message)
  }
  // #endregion
}

// #region 注册功能
// 密码
const password = ref('')
const password1 = ref('')
// 注册按钮
const userRegister = async () => {
  try {
    (phone.value && code.value && password.value == password1.value) && user.userRegister({ phone: phone.value, code: code.value, password: password.value, password1: password1.value })
    router.push('/login')
  } catch (error) {
    alert(error.message)
  }
}
  // #endregion


</script>

<style scoped lang="scss">
.register {
  width: 1000px;
  height: 445px;
  border: 1px solid rgb(223, 223, 223);
  margin: 0 auto;


  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;

    span {
      font-size: 14px;
      float: right;

      a {
        color: #e1251b;
      }
    }
  }

  div:nth-of-type(1) {
    margin-top: 40px;
  }

  .content {
    margin: 0 auto 18px;
    width: 500px;

    position: relative;
    text-align: left;
    display: flex;
    align-items: center;

    label {
      width: 96px;
      text-align: right;
      display: inline-block;
      font-size: 14px;
    }

    input {
      width: 270px;
      height: 38px;
      padding-left: 8px;
      box-sizing: border-box;
      margin-left: 5px;
      border: 1px solid #999;
    }

    img {
      vertical-align: sub;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 110px;
      color: red;
    }

    .get-code {
      box-sizing: border-box;
      height: 38px;
      padding: 0 10px;
      margin-left: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .controls {
    width: 210px;
    margin: 50px auto 0;
    text-align: center;
    position: relative;

    input {
      vertical-align: middle;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 15px;
      color: red;
    }
  }

  .btn {
    line-height: 36px;
    margin: 30px auto 0;

    button {
      width: 270px;
      height: 36px;
      background: #e1251b;
      color: #fff !important;
      display: inline-block;
      font-size: 16px;
      border: none;
    }
  }
}
</style>
