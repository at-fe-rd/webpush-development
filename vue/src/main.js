import Vue from 'vue'
import App from './App.vue'
import webPush from '../lib/web-push-js'

Vue.config.productionTip = false
const apiUrl = 'http://localhost:3000';
webPush.settingEnv(`${apiUrl}/save-subscription`, 'BIZ8E6td2p2qwepGtOt8IG-JZz1VVFt7F1MTNj4LZE6VFXlmKxl4cZKM8qP5kJIHdJvHZPVqfbrpiSBb6iLXILI')
webPush.requestNotiPermission();



new Vue({
  render: h => h(App),
}).$mount('#app')
