<template>
    <div class="hijo">
        <h3>Componente Hijo</h3>
        <p>El nombre es: {{ nombre }}</p>
        <p>La edad que tiene es: {{ edad }}</p>
    </div>
</template>

<script>
    export default {
        name: "HijoProps",
        props: ['nombre', "edad"]
    }
</script>

<style scoped>
.hijo{
    padding: 5px 10px;
    font-size: 12px;
    border: 2px dashed;
    width: fit-content;
    margin: 0 auto;
    background-color: yellow;
}
</style>