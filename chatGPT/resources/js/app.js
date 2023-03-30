import './bootstrap'
import {createApp} from 'vue'
import router from './router/index'
import axios from 'axios'
Vue.prototype.$http = axios
import App from './App.vue'

createApp(App).use(router).mount("#app")