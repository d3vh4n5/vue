<template>

  <div class="container">

    <h1>Vuex basico</h1>
    <CompoenteContador />

    <LeerStore />

    <h3>Aqui accederemos al estado, pero importado en el Main</h3>
    <p>
      El valor del contador es de: {{ this.$store.state.contador }}
      <br>
      El valor del contador es de: {{ contador }}
      <br>
      El valor de la otra variable es: {{ otraVariable }}
    </p>

    <hr>
    <UsuariosComponent></UsuariosComponent>

    <hr>
    <HomeComponent />
  </div>

</template>

<script>
import CompoenteContador from './components/ComponenteContador.vue';
import LeerStore from './components/LeerStore.vue';
import UsuariosComponent from './components/UsuariosComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import {mapState} from 'vuex';


export default {
  name: 'App',
  components: {
    CompoenteContador,
    LeerStore,
    UsuariosComponent,
    HomeComponent
  },
  computed: mapState(['contador', 'otraVariable'])
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
</style>
