import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/index"
import infraLayer from "@/infrastructure/vue-plugin";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(infraLayer);
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


