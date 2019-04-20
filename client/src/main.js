import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import GoogleLogin from 'vue-google-login';


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('GoogleLogin', GoogleLogin)

new Vue({
  render: h => h(App),
}).$mount('#app')
