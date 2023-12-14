<script setup>

defineProps({
    usuario:{
        type: Object
    }
})
defineEmits(["mas"])

// console.log(usuario)
</script>

<template>
    <div class="tarjeta">

        <p><b><i>
            Nombre: {{ usuario.name }}
        </i></b></p>
        <button @click="$emit('mas', usuario)">Saber más</button>
    </div>
</template>

<style scoped>
.tarjeta{
    width: 200px;
    border: 1px solid red;
    padding: 10px;
    margin: 10px;
}
</style>