<template>
  <div class="register">
    <h3>注册新用户
      <span class="go">我有账号，去 <a href="login.html" target="_blank">登陆</a>
      </span>
    </h3>
    <div class="content">
      <label>手机号:</label>
      <input type="text" placeholder="请输入你的手机号">
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>验证码:</label>
      <input type="text" placeholder="请输入验证码">
      <button class="get-code">获取验证码</button>
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>登录密码:</label>
      <input type="text" placeholder="请输入你的登录密码">
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>确认密码:</label>
      <input type="text" placeholder="请输入确认密码">
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="controls">
      <input name="m1" type="checkbox">
      <span>同意协议并注册《尚品汇用户协议》</span>
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="btn">
      <button>完成注册</button>
    </div>
  </div>
</template>

<script setup lang="ts">

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
      &:hover{
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
