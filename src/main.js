import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.use(axios, ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
