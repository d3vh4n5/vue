<template>
    <div class="state">
        <h1>STATE</h1>
        <h2>
            Este ejemplo es de la documentación oficial
        </h2>
        <p>
            Clicked: {{ count }} times, count is {{ evenOrOdd }}.
        </p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">Increment if odd</button>
      <button @click="incrementAsync">Increment async</button>
      <br>
      <br>
      <hr>
      <h2>
        Esto lo hice yo
      </h2>
      <p>
        La otra variable es: {{ otraVariable }}
      </p>
      <button @click="cambiarDesdeStore">Cambiar</button>
      <button @click="imprimir">Imprimir en consola</button>
      <p>
        Este ejemplo tiene cosas que vi del curso de Vue2 en Udemi de 
        Manuel Muñoz, estoy intentando hacer combinar las cosas juntas 
        ya que a mi forma de ver es mejor.
      </p>
      <br>
      <h3>Importante del ejemplo: </h3>
      <br>
      <ul>
        <li>...mapState Puesto en computed de esta manera nos permite
            tener mas propiedades computadas, e importar las del store 
            de una forma ams comoda y comprimida
        </li>
        <li>
            ...mapActions Lo mismo pero con las actions y los métodos.
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { mapState, useStore, mapActions } from 'vuex'
// import { store } from '../store/store2,js'
  
  export default {
    setup () {
      const store = useStore()
  
      return {
        // count: computed(() => store.state.count),
        evenOrOdd: computed(() => store.getters.evenOrOdd),
        increment: () => store.dispatch('increment'),
        decrement: () => store.dispatch('decrement'),
        incrementIfOdd: () => store.dispatch('incrementIfOdd'),
        incrementAsync: () => store.dispatch('incrementAsync')
      }
    }, 
    
    
    // Esto lo estoy inventando yo en base al curso ed Udemy con Vue 2
    computed:mapState(["count", "otraVariable"]),
    methods: {
        ...mapActions(['cambiarDesdeStore']),
        imprimir(){
            console.log("Esto se imprime joya")
        }
    }
  }
  </script>

<style scoped>
.state{
    border: 1px solid;
    padding: 10px;
    margin: 10px 0;

}
</style>