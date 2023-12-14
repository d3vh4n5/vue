<script>
export default {
    props:['tipo'],
    render(createElement){
        return createElement(
            this.tipo, // Que tipo de eleento va a renderizar
            this.$slots.default, // Contenido del elemento a renderizar
        )
    }
}
</script>

<style scoped>
</style>