<script setup>
import HelloWorld from './components/HelloWorld.vue'
import InfoCard from './components/InfoCard.vue';
import PupUp from './components/PupUp.vue';
import TarjetaComponent from './components/TarjetaComponent.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const objeto = {
  name: "Carlitos",
  email: "asdfasd@asdasdf.com"
}
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
    // console.log(usuarios)
  })

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">

      <HelloWorld 
        msg="Vue app" 
        otraProp="Usando composition API" />

    </div>
  </header>

  
  <main>




    <InfoCard 
      title="Hola"
      msg="Este es un mensaje de prueba, no le des bola" />


    <section>
      <h3> Contenido con un pop up</h3>
      <PupUp @cerrar="cerrar" :objeto="usuario" v-if="count"></PupUp>
      <br>
      <TarjetaComponent @mas="handler" :usuario="usuario" v-for="usuario in usuarios"/>
    </section>





  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
