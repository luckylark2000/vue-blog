<template>
  <n-config-provider>
    <div class="login-container">
      <n-form ref="formRef" :model="form" :rules="rules" @submit.prevent="onSubmit">
        <n-form-item label="用户名" path="username">
          <n-input
            style="background-color: #e1ecda"
            v-model:value="form.username"
            placeholder="请输入用户名"
          />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input
            style="background-color: #e1ecda"
            v-model:value="form.password"
            type="password"
            placeholder="请输入密码"
          />
        </n-form-item>
        <div class="button-group">
          <n-button type="primary" class="login-btn" html-type="submit">登录</n-button>
        </div>
        <!-- 注册与忘记密码按钮 -->
        <div class="link-group">
          <n-button type="info" size="small" text @click="handleRegister">注册</n-button>
          <n-button type="info" size="small" text @click="handleForgotPassword"
            >忘记密码？</n-button
          >
        </div>
      </n-form>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue';
//import {R} from 'vue-router'

const formRef = ref(null);
const form = ref({ username: '', password: '' });
const rules = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('表单提交', form.value);
      // 这里可以添加登录逻辑
    })
    .catch((err) => {
      console.error('验证失败', err);
    });
};

const handleRegister = () => {
  // 跳转到注册页面的逻辑
};

const handleForgotPassword = () => {
  // 忘记密码处理逻辑
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100vh;
  background-image: url('../../assets/images/backgroung.png');
  background-repeat: no-repeat; /* 确保图片不重复 */
  background-size: cover;
  align-items: center;
  justify-content: center;

  .n-form {
    position: relative;

    /* 一定要设置，要不然就是一个继承 */
    z-index: 0;
    width: 50vmin;
    padding: 20px;
    background-color: white;
    border-radius: 5vh;
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);

    /* 溢出部分隐藏 */
    overflow: hidden;

    ::v-deep(.n-form-item-feedback-wrapper) {
      --n-feedback-height: 2vh;
    }
  }

  .button-group {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }

  .login-btn {
    width: 100%; /* 使按钮在给定的容器内居中且全宽 */
  }

  .link-group {
    display: flex;
    width: 100%;
    margin-top: 2vh;
    justify-content: space-between;

    button {
      width: 50%; /* 为了视觉上更和谐，可以根据需要调整宽度 */
    }
  }

  .n-form::before {
    position: absolute;
    top: -50%;
    left: -50%;

    /* 这个要是个负数 */
    z-index: -5;
    width: 200%;
    height: 200%;
    background-color: #aac2a1;
    background-image: conic-gradient(transparent, #66ddf7, transparent 30%);
    animation: rotate 5s linear infinite;
    content: '';
  }

  .n-form::after {
    position: absolute;

    /* 这个要是负数而且要比before的-2要大 */
    z-index: -3;
    background-color: #f7ebc6;
    border-radius: 4vmin;
    content: '';
    inset: 5px;
  }

  /* 动画 */
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
