import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import antUI from'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(elementUI);
Vue.use(antUI);

router.beforeEach((to, from, next) => {
  NProgress.start()
  setTimeout(() => {
    next()
    NProgress.done()
  }, 200)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
