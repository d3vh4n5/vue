<script>
export default {
    data(){
        return{
            mensajes: [
                {time:"10:32", author : "user", msg :"Hola"},
                {time:"10:32", author : "user", msg :"Como andas? 🙂"},
                {time:"11:46", author : "other", msg :"Todo bien, vos? 🙂"},
                {time:"10:32", author : "user", msg :"Bien, creo que debería encriptar los mensajes del chat, quizás con Base? "},
                {time:"10:32", author : "user", msg :"Tengo que investigar.."},
                {time:"11:46", author : "other", msg :"Ok, y recuerda.. ya me olvide xD"},
                {time:"11:46", author : "other", msg :"Esto podría ser un chat grupal donde cada uno elija el color con el que quiera aparecer"},
            ],
            nuevoMensaje: '',
            nuevaRespuesta: ''
        }
    },
    methods:{
        agregarMensaje(){
            if (!this.nuevoMensaje.trim() == ''){
                let date = new Date()
                this.mensajes.push({
                    time: `${date.getHours()}:${date.getMinutes()}`,
                    author:"usuario",
                    msg: this.nuevoMensaje
                })
                this.$nextTick(() => {
                    var chat = this.$refs.chat;
                    chat.scrollTop = chat.scrollHeight;
                    
                    // var end = document.getElementById("endMsj");
                    // end.scrollIntoView({ behavior: 'smooth', block: 'center' })
                });
                this.nuevoMensaje = '';
            }
        },
        agregarRespuesta(){
            // if (!this.nuevoMensaje.trim() === ''){
                let date = new Date()
                this.mensajes.push({
                    time: `${date.getHours()}:${date.getMinutes()}`,
                    author:"other",
                    msg: this.nuevaRespuesta
                })
                this.$nextTick(() => {
                    var chat = this.$refs.chat;
                    chat.scrollTop = chat.scrollHeight;
                    
                    // var end = document.getElementById("endMsj");
                    // end.scrollIntoView({ behavior: 'smooth', block: 'center' })
                });
                this.nuevaRespuesta = '';
            // }
        },
    },
    mounted(){
        var chat = this.$refs.chat;
        chat.scrollTop = chat.scrollHeight;
    }
}
</script>
<!-- TEmplatee -->
<template>
    <div>
        <h1>Chat component</h1>
        <p>
            {{ mensaje }}
        </p>
        <div class="chat" ref="chat">
            <p v-for="mensaje in mensajes" :class="{other: mensaje.author=='other'}">
                {{ mensaje.msg }}
                <div class="time">
                    {{ mensaje.time }}
                </div>
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
    padding: 10px;
    border: 1px solid yellowgreen;
    width: clamp(300px, 70%, 500px);
    height: 200px;
    border-radius: 10px;
    overflow:auto;
    scrollbar-gutter: stable both-edges;
    scroll-behavior: smooth;
    scroll-behavior: smooth;
}

.chat::-webkit-scrollbar{
    margin: 5px;
    width: 4px;
    padding: 10px;
    border-radius: 20px;
}
.chat::-webkit-scrollbar-thumb{
    background-color: yellowgreen;
    border-radius: 20px;
    width: 6px;
    /* position: relative; */
}
.chat p{
    font-family: monospace;
    color: yellowgreen;
    background-color: rgba(94, 94, 64, 0.6);
    border-radius: 15px 0 15px 15px;
    padding: 5px;
    margin: 5px;
    margin-left: auto;
    width: fit-content;
    max-width: 70%;
    &.other{
        border-radius: 0px 15px 15px 15px;
        margin-left: 5px;
        margin-right: auto;
        color: aqua;
        background-color: rgba(64, 83, 94, 0.6);
    }
}

.time{
    font-size: 10px;
    color: rgb(137, 182, 171);
    width: fit-content;
    margin-left: auto;
}
.other .time{
    margin-left: 0;
}
.inputs{
    border-radius: 10px;
    padding: 10px;
    margin-top: 5px;
    background-color: rgba(153, 205, 50, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.input-enviar, .input-respuesta{
    width: 50%;
    background-color: rgba(0, 255, 255, 0.1);
    display: flex;
}

input{
    flex-grow: 1;
}
input:hover{
    outline: 2px solid rgba(153, 205, 50, 0.5);
}
input:focus{
    outline: 2px solid yellowgreen;
}
button:nth-of-type(1){
    margin: 0 5px;
}
</style>