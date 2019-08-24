import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import Toasted from 'vue-toasted';
import router from './router';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

//Use & load the vue-toasted plugin
Vue.use(Toasted, {
  iconPack: 'fontawesome'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
