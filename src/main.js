import Vue from 'vue'
import App from './App.vue'
// 全局引入样式
import 'ant-design-vue/dist/antd.css';
import { Carousel  } from 'ant-design-vue';
import router from './router'

Vue.use(Carousel );

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
