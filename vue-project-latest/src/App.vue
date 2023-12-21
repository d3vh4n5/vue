<script setup>
import HelloWorld from './components/HelloWorld.vue'

const objeto = {
  name: "Carlitos",
  email: "asdfasd@asdasdf.com"
}
 
  

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
            State
          </router-link>
        </li>
        <li>
          <router-link active-class="activo" to="/QuestsWrapper/base">
            Preguntas
          </router-link>
        </li>
        <li>
          <router-link active-class="activo" to="/UsersWrapper">
            Usuarios + pop-Up
          </router-link>
        </li>
        <li>
          <router-link active-class="activo" to="/jsoncreator">
            Json creator
          </router-link>
        </li>
      </ul>
    </nav>
    <p><i>Para que las animaciones de transición funcionen, todo
      el contenido de cada componente tiene que estar envuelto en 1
      solo elemento
    </i></p>
  </header>
  
  <transition>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </transition>
  
  <main>



    


    

    
  </main>
</template>

<style scoped>
.v-enter-active, .v-leave-active{
    transition: opacity .3s ease;  
}
.v-leave-to, .v-enter-from{ 
    opacity: 0;
}








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
