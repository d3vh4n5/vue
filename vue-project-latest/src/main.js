import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import store from './store/store.js'


// import { createStore } from 'vuex'
// Así funciona pero vamos a usar un store distinto que importamos de la carpeta store
// const store = createStore({
//     state () {
//       return {
//         count: 5
//       }
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
//   })

const app = createApp(App)

app.use(store)

app.mount('#app');
