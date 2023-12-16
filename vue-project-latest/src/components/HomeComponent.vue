<script setup>
import InfoCard from './InfoCard.vue';
</script>

<template>
    <div class="container">

        <h1>Esta es la home</h1>
        <InfoCard 
        title="Componente Home"
        msg="Este es el componente home" />
        <div class="exam-container">
            <router-link to="/QuestsWrapper/gproyectos" class="box-exam">Gestión de Proyectos</router-link>
            <router-link to="/QuestsWrapper/decisiones" class="box-exam">Decisiones y Resoluciones Eficientes</router-link>
           
        </div>
        
        <p>Deberían redirigir a un componente que recibe un slug
            y que este, dependiendo el slug (nombre de examen) cargue
            unas preguntas u otras.
        </p>
    </div>
</template>
<style scoped>
.exam-container{
    margin: 20px 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}
.box-exam{
    color: yellowgreen;
    border: 1px solid;
    width: 250px;
    text-align: center;
    padding: 30px 0;
}
</style>