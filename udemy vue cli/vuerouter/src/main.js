import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'; // importo el router
import { routes } from './routes'; // importo las rutas

Vue.use(VueRouter) // Le indico que use el router

// generar un objetod el router para pasarle las rutas
const router = new VueRouter({
  routes: routes,
})


// Esto es de la parte de directivas:
Vue.directive('alerta', {
  // Esta será el trigger que lanza
  bind(el, binding){
    // El es el elemento, bindig es lo que podemos pasarle como valor al elemento
    el.style.color = 'red';
    el.style.fontSize = binding.value + 'px';
  }
})

Vue.directive('topfix', {
  bind(el, binding){
    console.log(el, binding)
    el.style.position = 'fixed';

    // expresion (valor)
    if(binding.expression){
      el.style.top = binding.expression + 'px';
    }

    // modigficador
    if (binding.arg){
      let color = 'blue';
      let modificadores = Object.keys(binding.modifiers)
      if(modificadores.length > 0){
      // if(binding.modifiers > 0){
        // color = Object.keys(binding,modifiers[0])
        color = modificadores[0];
      }

      el.style.backgroundColor = color

    }
  }
})





Vue.config.productionTip = false

new Vue({
  router: router, // Lo agrego en nuestra app
  render: h => h(App),
}).$mount('#app')
