import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import axios from 'axios'

import Vueaxios from 'vue-axios'

axios.defaults.baseURL = 'https://josuke-store-backend.vercel.app'

var token = localStorage.getItem('token');
if (token)
    axios.defaults.headers.common['Authorization'] = token;


createApp(App).use(router).use(Vueaxios, axios).mount('#app')