// 定义vee-validate的全局校验规则
import { defineRule } from 'vee-validate';

// 手机号
defineRule('phone', value => {
  if (!value || !value.length) {
    return '请输入手机号'
  }
  const regex = /^\d{11}$/i;
  if (!regex.test(value)) {
    return '手机号格式错误';
  }

  return true;
})

// 验证码
defineRule('code', value => {
  if (!value || !value.length) {
    return '请输入验证码'
  }
  const regex = /^\d{6}$/i;
  if (!regex.test(value)) {
    return '验证码格式错误';
  }
  return true;
})

// 密码
defineRule('password', value => {
  if (!value || !value.length) {
    return '请输入密码'
  }

  const regex = /^[0-9a-zA-Z]{6-18}$/i;
  if (!regex.test(value)) {
    return '密码只能包含数字和大小写字母，且长度为6-18位';
  }
  return true;
})

// 确认密码
defineRule('confirmed', (value, [target]) => {
  if (value === target) {
    return true;
  }
  return '密码不匹配';
})

// 确认勾选同意协议
defineRule('agree', value => {
  if (value) {
    return '请同意协议';
  }
  return true;
})

// 登录密码
defineRule('loginPassword', value => {
  if (!value || !value.length) {
    return '请输入密码'
  }
  return true
})
