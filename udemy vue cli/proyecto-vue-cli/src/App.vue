<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <!-- Probando props: -->
  <!-- <Persona 
    v-for="usuario in usuarios"
    v-bind:key="usuario.id"
    :nombre="usuario.name"
    :email="usuario.email"
    :telefono="usuario.phone"
  ></Persona> -->

  <!-- <h1>Slots</h1>
  <ComponenteSlot>
  </ComponenteSlot>
  <ComponenteSlot>
    <p>
      Hola, estoy dentro del componente Slot y estoy injertado
    </p>
    <template v-slot:slotdos>
      <p><b>
        Este contenido esta dentro edl slot numero 2 dentro del mismo componente
      </b></p>
    </template>
  </ComponenteSlot> -->

  <CePadre></CePadre>
</template>

<script>
// import Persona from './components/Persona.vue';
import axios from 'axios';
// import ComponenteSlot from './components/ComponenteSlot.vue';

import CePadre from './components/CePadre.vue';
// import elemento from './components/elemento.vue';


export default {
  name: 'App',
  components: {
    // Persona
    // ComponenteSlot,
    CePadre,
  },
  data(){
    return{
      usuarios: []
    }
  },
  methods: {
    obtenerUsuarios(){
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then( resp => this.usuarios = resp.data)
    }
  },
  mounted(){
    this.obtenerUsuarios();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: rgb(61, 133, 133);
}
</style>
