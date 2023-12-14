<template>
    <div>
        <hr>
        <h3>Componente Persona</h3>
        <p>nombre: {{ nombre }}</p>
        <p>email: {{ email }}</p>
        <p>telefono: {{ telefono }}</p>
        <Hijo nombre="Pilin" edad=2></Hijo>
        <hr>
    </div>
</template>

<script>
    import Hijo from "./Hijo.vue"

    export default {
        name: "PersonaProps",
        // props: ['nombre', "email"], Propiedades sin validar
        // Validando props (! Notese que ahora será un objeto, y no un array)
        props: {
            nombre: String,
            email: String,
            telefono: String
        },
        components: {
            Hijo
        }
    }
</script>

<style scoped>

</style>