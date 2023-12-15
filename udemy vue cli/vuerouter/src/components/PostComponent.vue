<template>
    <div class="container">
        <p>
            Esta es la ruta dinámica que recibe parámetros
        </p>
        <h1>Parametro: {{ id }}</h1>
    </div>
</template>

<script>
export default{
    data(){
        // El objeto $route es otro objeto al que peudo acceder gracias 
        // al vue-router
        const {id} = this.$route.params 

        return {
            id
        }
    },
    watch:{
        // 'route' (to, from)
        '$route' (to){
            this.id = to.params.id
        }
    }
}
</script>