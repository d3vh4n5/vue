import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// creamos nuestro almacén

// en la documentación no la exporta, pero nosotros la exportaremos
export const store = new Vuex.Store({
    state:{
        contador: 0,
        otraVariable: false,
        usuarios: [
            {
                nombre: 'Jansito',
                edad: 32,
                activo: false
            },
            {
                nombre: 'Jose',
                edad: 25,
                activo: true
            },
            {
                nombre: 'Eli',
                edad: 27,
                activo: false
            },
        ],
        usuario: null,
    },
    mutations:{
        sumar(state){
            state.contador++;
        },
        restar(state){
            state.contador--;
        },
        obtenerUsuarios(state){
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then( resp => {state.usuario = resp.data})
        }
    },
    actions:{
        getUsuarios(context){
            context.commit('obtenerUsuarios');
        }
    },
    getters: {
        listadoActivos: state => state.usuarios.filter(usuario=> usuario.activo).length
    }
})

store.commit('sumar')
store.commit('restar')