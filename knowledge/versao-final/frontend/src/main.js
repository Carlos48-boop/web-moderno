import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkNhcmxvcyBBbGJlcnRvIiwiZW1haWwiOiJjYXJsb3MzNS5uYXBvbGVhb0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjI1MTc2MzE4LCJleHAiOjE2MjU0MzU1MTh9.ory6xkeRnGUz89yNWjPxrYYu7youIXy5qdxrU4nsNG0'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')