<script>
export default {
    data(){
        return{
            mensajes: [
                {author : "user", msg :"Hola"},
                {author : "user", msg :"Como andas?"},
                {author : "other", msg :"Todo bien, vos?"},
            ],
            nuevoMensaje: '',
            nuevaRespuesta: ''
        }
    },
    methods:{
        agregarMensaje(){
            this.mensajes.push({author:"usuario", msg: this.nuevoMensaje})
            this.$nextTick(() => {
                var chat = this.$refs.chat;
                chat.scrollTop = chat.scrollHeight;
                
                // var end = document.getElementById("endMsj");
                // end.scrollIntoView({ behavior: 'smooth', block: 'center' })
            });
            this.nuevoMensaje = '';
        },
        agregarRespuesta(){
            this.mensajes.push({author:"other", msg: this.nuevaRespuesta})
            this.$nextTick(() => {
                var chat = this.$refs.chat;
                chat.scrollTop = chat.scrollHeight;
                
                // var end = document.getElementById("endMsj");
                // end.scrollIntoView({ behavior: 'smooth', block: 'center' })
            });
            this.nuevaRespuesta = '';
        }
    }
}
</script>

<template>
    <div>
        <h1>Chat component</h1>
        <p>
            {{ mensaje }}
        </p>
        <div class="chat" ref="chat">
            <p v-for="mensaje in mensajes" :class="{other: mensaje.author=='other'}">
                {{ mensaje.msg }}
            </p>
        </div>
        <div class="inputs">
            <div class="input-enviar">
                <input type="text" v-model="nuevoMensaje" @keyup.enter="agregarMensaje">
                <button @click="agregarMensaje">Enviar</button>
            </div>
            <div class="input-respuesta">
                <input type="text" v-model="nuevaRespuesta" @keyup.enter="agregarRespuesta">
                <button @click="agregarRespuesta">Responder</button>
            </div>
        </div>
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
    font-family: 'Courier New', Courier, monospace;
    color: yellowgreen;
    background-color: rgba(153, 205, 50, 0.2);
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    margin-left: auto;
    width: fit-content;
    max-width: 70%;
    &.other{
        margin-left: 5px;
        margin-right: auto;
        color: aqua;
        background-color: rgba(0, 255, 255, 0.2);
    }
}
.inputs{
    border-radius: 10px;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid yellowgreen;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.input-enviar, .input-respuesta{
    width: 50%;
}

input{
    background-color: rgb(9, 9, 32);
    width: 70%;
    color: aliceblue;
}
</style>