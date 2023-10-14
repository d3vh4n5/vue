<script>
export default {
    data(){
        return{
            mensaje: "Hola viteh",
            nuevaFruta: "",
            frutas: ["Pera", "Manzana", "Banana"],
            mensajes: ["Hola", "Como andas"],
            nuevoMensaje: ''
        }
    },
    methods:{
        agregarFruta(){
            this.frutas.push(this.nuevaFruta)
            this.nuevaFruta = '';
        },
        agregarMensaje(){
            this.mensajes.push(this.nuevoMensaje)
            this.$nextTick(() => {
                var chat = this.$refs.chat;
                chat.scrollTop = chat.scrollHeight;
                
                // var end = document.getElementById("endMsj");
                // end.scrollIntoView({ behavior: 'smooth', block: 'center' })
            });
            // this.nuevoMensaje = '';
        }
    }
}
</script>

<template>
    <div>
        <h1>Primer componente</h1>
        <p>
            {{ mensaje }}
        </p>
        <!--
        <input type="text" v-model="nuevaFruta">
        <button @click="agregarFruta">Agregar fruta</button>
         <ul>
            <li v-for="fruta in frutas"> {{ fruta }}</li>
        </ul> -->
        <div class="chat" ref="chat">
            <p v-for="mensaje in mensajes">{{ mensaje }}</p>
        </div>
        <input type="text" v-model="nuevoMensaje">
        <button @click="agregarMensaje">Agregar fruta</button>
    </div>
</template>

<style scoped>
h1{
    color: red
}
.chat{
    border: 1px solid yellowgreen;
    height: 200px;
    border-radius: 10px;
    overflow:auto;
    scroll-behavior: smooth;
}
.chat p{
    color: yellowgreen;
    background-color: rgba(153, 205, 50, 0.289);
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}
</style>