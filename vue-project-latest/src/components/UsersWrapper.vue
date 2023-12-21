<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import PupUp from './PupUp.vue';
import TarjetaComponent from './TarjetaComponent.vue';


const count = ref(false)
const usuarios = ref({})
  const usuario = ref({})

  function cerrar(){
    count.value = !count.value;
  }
  
  function handler(user){
    usuario.value = user
    count.value = !count.value;
  }

  function obtenerUsuarios(){
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then( resp => usuarios.value = resp.data)
  }
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
    obtenerUsuarios();
  })
</script>

<template>
    <section>
      <h3> Contenido con un pop up</h3>
      <transition>
        <PupUp @cerrar="cerrar" :objeto="usuario" v-if="count"></PupUp>
      </transition>
      <br>
      <TarjetaComponent @mas="handler" :usuario="usuario" v-for="usuario in usuarios"/>
    </section>
</template>

<style scoped>


.v-enter-active, .v-leave-active{
    /* top: 50px;  */
    transition: all .3s ease;  
}
.v-leave-to, .v-enter-from{ 
    top: -50px; 
    opacity: 0;
}

</style>