import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
