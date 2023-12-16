<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';
import QuestComponent from './QuestComponent.vue';
import InfoCard from './InfoCard.vue';


const respuesta = ref(false)
const preguntas = ref(null)
const router = useRouter()
const route = useRoute()

const { mat } = route.params
const title = "Examen de" + mat;
function obtenerPreguntas(){
      axios.get(`../public/${mat}.json`)
        .then( resp => preguntas.value = resp.data)
}

function redireccionarInicio(){
  router.push({path:'/'})
}

onMounted(() => {
  obtenerPreguntas()
})
// fetch the user information when params change
watch(
      () => route.params.mat,
      async newId => {
        userData.value = await fetchUser(newId)
      }
    )



</script>

<template>
  <div class="container">
    <button @click="redireccionarInicio">Volver</button>
    <!-- <p>
      Parametro: {{ mat }}
    </p> -->
    <!-- <InfoCard
    title="Examen de Gestión de proyectos"
    msg="Este es el examen final de Gestión de proyectos para aprender las respuestas"
    /> -->
    <div>
      <QuestComponent :quest="pregunta" v-for="pregunta in preguntas"/>
    </div>
  </div>
</template>