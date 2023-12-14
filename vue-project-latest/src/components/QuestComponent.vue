<script setup>
import { ref } from 'vue';

defineProps({
    quest: {
        type: Object
    }
})

const respuesta = ref(false)
</script>

<template>

    <div class="questblock">
        <p>
            {{ quest.pregunta }}
        </p>
        <br>
      <button @click="respuesta = !respuesta">Mostrar Respuesta</button>
      <p v-if="respuesta" class="green">
        Respuesta correcta:
        <br> 
        <b>
            {{ quest.respuesta }}
        </b>
      </p>
    </div>

</template>

<style scoped>
.questblock{
    background-color: rgb(39, 39, 39);
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
}

button{
    padding: 5px 20px;
    background-color: lightgreen;
    border: none;
    border-radius: 5px;
}
</style>