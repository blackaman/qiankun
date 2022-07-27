import {createApp} from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { registerMicroApps, start} from 'qiankun';

registerMicroApps([{
  name: 'micro-app-vue', // app name registered
  entry: '//localhost:8081/c-vue/',
  container: '#container',
  activeRule: '/vue',
}, ]);

start();
// Vue.config.productionTip = false;

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

createApp(App).use(router).mount('#qiankun');