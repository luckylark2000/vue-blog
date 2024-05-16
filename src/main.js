import 'normalize.css';
// 通用字体
import 'vfonts/Lato.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import NaiveUi from 'naive-ui';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(NaiveUi);

app.mount('#app');
