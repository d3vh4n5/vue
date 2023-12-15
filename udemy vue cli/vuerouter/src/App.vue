<template>
  <div id="app">
    <h1>Rutas en Vue</h1>
    <h2>6 pasos para trabajar las rutas en Vue</h2>
    <ul>
        <router-link active-class="activo" tag="li" exact to="/">
          <a>
            INICIO
          </a>
        </router-link>
        <router-link active-class="activo" tag="li" to="/blog">
          <a>
            Blog
          </a>
        </router-link>
        <router-link active-class="activo" tag="li" to="/post/01">
          <a>
            Post
          </a>
        </router-link>
        <router-link active-class="activo" tag="li" to="/post/133">
          <a>
            Post
          </a>
        </router-link>
    </ul>
    <hr>
    <router-view></router-view>
    <hr>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.router-link-active a{
  color: orange;
}

.activo a{
  font-weight: bold;
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
