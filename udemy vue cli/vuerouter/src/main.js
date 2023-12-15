import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'; // importo el router
import { routes } from './routes'; // importo las rutas

Vue.use(VueRouter) // Le indico que use el router

// generar un objetod el router para pasarle las rutas
const router = new VueRouter({
  routes: routes,
})

Vue.config.productionTip = false

new Vue({
  router: router, // Lo agrego en nuestra app
  render: h => h(App),
}).$mount('#app')
