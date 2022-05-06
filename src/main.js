import Vue from 'vue'
import App from './App.vue'
import router from  './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)
import { TabsPlugin } from 'bootstrap-vue'
Vue.use(TabsPlugin)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import { CollapsePlugin } from 'bootstrap-vue'
Vue.use(CollapsePlugin)
let vueRoute=new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
export default vueRoute