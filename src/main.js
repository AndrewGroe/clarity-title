import Vue from 'vue'
import App from './App.vue'
import router from './router'

import money from 'v-money'

Vue.config.productionTip = false

// Vue Money Input Mask config
Vue.use(money, {
  decimal: '.',
  thousands: ',',
  prefix: '$ ',
  suffix: '',
  // Level of decimal precision. REQUIRED
  precision: 2,
  // If mask is false, outputs the number to the model. Otherwise outputs the masked string.
  masked: false
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
