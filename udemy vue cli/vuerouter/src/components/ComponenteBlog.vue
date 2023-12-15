<template>
    <div class="container">
        <h3>Componente blog</h3>
        <button @click="volverInicio">Volver a Inicio</button>
    </div>
</template>

<script>
export default {
    methods:{
        volverInicio(){
            this.$router.push('/', ()=>console.log("Transferencia completada"))
        }
    }
}

</script>