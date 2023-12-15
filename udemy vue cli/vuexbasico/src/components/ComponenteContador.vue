<template>
    <div class="container">

        <p>
            El valor del contador es: {{ this.$store.state.contador }}
        </p>
        <button @click="Sumar">sumar</button>
        <button @click="Restar">restar</button>
    </div>
</template>

<script>

import { store } from '../store/store';

export default {
    store,
    methods:{
        Sumar(){
            // Ejecuta la función del store
            this.$store.commit('sumar')
        },
        Restar(){
            // Ejecuta la función del store
            this.$store.commit('restar')
        }
    }
}


</script>