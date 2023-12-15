<script setup>
import HelloWorld from './components/HelloWorld.vue'
import InfoCard from './components/InfoCard.vue';
import PupUp from './components/PupUp.vue';
import TarjetaComponent from './components/TarjetaComponent.vue';
import QuestComponent from './components/QuestComponent.vue';
import ContadorComponent from './components/ContadorComponent.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const objeto = {
  name: "Carlitos",
  email: "asdfasd@asdasdf.com"
}
  const count = ref(false)
  const respuesta = ref(false)
  const usuarios = ref({})
  const preguntas = ref(null)
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
  function obtenerPreguntas(){
      axios.get("../public/gproyectos.json")
        .then( resp => preguntas.value = resp.data)
  }
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
    obtenerUsuarios();
    obtenerPreguntas()
    console.log(preguntas)
  })

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <HelloWorld 
        msg="Vue app" 
        otraProp="Usando composition API" />

    </div>
  </header> -->

  <header>
    <h1>Nav</h1>
    <nav>
      <ul>
        <li>

          <router-link active-class="activo" exact to="/">
            INICIO
          </router-link>
        </li>
        <li>
          <router-link active-class="activo" to="/contador">
            Blog
          </router-link>
        </li>
      </ul>
    </nav>

  </header>
  
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
  
  <main>

    <ContadorComponent/>


    <InfoCard 
      title="Practica de examen"
      msg="Practicando el examen de Gestión de Proyectos." />


    <section>
      <h3> Contenido con un pop up</h3>
      <PupUp @cerrar="cerrar" :objeto="usuario" v-if="count"></PupUp>
      <br>
      <TarjetaComponent @mas="handler" :usuario="usuario" v-for="usuario in usuarios"/>
    </section>

    
    <div >
      <QuestComponent :quest="pregunta" v-for="pregunta in preguntas"/>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.activo{
  color: red;
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
