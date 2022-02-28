import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store';
import axios from 'axios';
import { VueApexCharts } from 'vue-apexcharts';
import VueAxios from 'vue-axios';

// App.component('apexchart', VueApexCharts)

createApp(App)
.use(VueApexCharts)
.use(VueAxios, axios)
.use(router)
.use(store)
.mount('#app')
