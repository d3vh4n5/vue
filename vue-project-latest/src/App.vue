<script setup>
import Chat from './components/Chat.vue';
import InfoCard from './components/InfoCard.vue'
</script>

<template>
  <header>
    <InfoCard 
      title="Atención ⚠️" 
      msg="Este trabajo está en desarrollo, se creará más adelante el backend
      en node, que será una web-socket API. Tambien se está aprendiendo VUE de 
      UDEMY y luego de este curso: https://www.youtube.com/watch?v=vOdj_e3Z4jY
      " 
    ></InfoCard>
  </header>

  <main>
    <Chat />
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
