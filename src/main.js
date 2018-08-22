import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Form from './components/Form.vue'
import Collection from './components/Collection.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Collection },
  {path: '/addMovie', component: Form},
]

const router= new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

