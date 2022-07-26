import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'micro-app-vue', // app name registered
    entry: '//localhost:8082/child/vue-history/',
    container: '#container',
    activeRule: '/hexo',
  },
]);

start();
createApp(App).mount('#qiankun')



