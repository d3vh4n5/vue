<template>
<h2>
    Soy el componente hijo
    <button @click="emitirEvento">Dejar de mostrarme</button>
</h2>
</template>

<script>
export default {
    methods: {
        emitirEvento(){
            this.$emit('cerrar');
        }
    }
}
</script>

<style scoped>
</style>