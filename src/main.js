import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/index.css';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB-E1G59dcqv3orfjhQzupr7F1UCodDTh8',
    libraries: 'places'
  }
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
