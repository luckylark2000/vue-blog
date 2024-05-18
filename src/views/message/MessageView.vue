<template>
  <n-layout>
    <n-layout-header bordered> </n-layout-header>
    <n-layout-content>
      <n-form
        style="display: flex; flex-direction: column"
        ref="formRef"
        :model="form"
        :rules="rules"
        @submit.prevent="submitForm"
      >
        <n-form-item path="message">
          <n-space justify="center">
            <n-icon size="30"><ChatbubbleOutline /></n-icon>
            <h3>留言板</h3>
          </n-space>
          <n-input
            style="min-height: 20vh"
            v-model:value="form.message"
            placeholder="请输入您的留言..."
          />
        </n-form-item>
        <n-button style="width: 15vh" type="primary" native-type="submit">提交留言</n-button>
      </n-form>
    </n-layout-content>
    <n-layout-footer bordered>
      <n-list>
        <n-list-item v-for="(msg, index) in messages" :key="index">
          <n-space align="start">
            <n-icon><ChatbubbleEllipsesOutline /></n-icon>
            <div class="bubble">{{ msg }}</div>
          </n-space>
        </n-list-item>
      </n-list>
    </n-layout-footer>
  </n-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useMessage } from 'naive-ui';
import { ChatbubbleOutline, ChatbubbleEllipsesOutline } from '@vicons/ionicons5';

const message = useMessage();

const form = ref({
  message: '',
});
const messages = ref([]);

const rules = {
  message: [{ required: true, message: '留言不能为空' }],
};

const submitForm = () => {
  if (form.value.message.trim() !== '') {
    messages.value.push(form.value.message);
    form.value.message = ''; // 清空输入框
    message.success('留言成功！');
  }
};
</script>

<style scoped lang="scss">
.bubble {
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 70%;
}

.bubble-icon {
  margin-right: 10px;
}
</style>
