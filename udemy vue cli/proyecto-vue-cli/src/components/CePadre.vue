<template>
<h2>
    Custom Events componente padre
</h2>
<button @click="mostrar = !mostrar">Mostrar Hijo</button>
<CeHijo @cerrar="mostrar = !mostrar" v-show="mostrar"></CeHijo>

</template>

<script>
import CeHijo from './CeHijo.vue';

export default {
    components:{
        CeHijo
    },
    data(){
        return {
            mostrar: false,
        }
    }
}

</script>

<style scoped>
</style>