<script setup>
import { ref } from 'vue';

defineProps({
    quest: {
        type: Object
    }
})

const respuesta = ref(false)
</script>

<template>

    <div 
        class="questblock" 
        :class=" {'expand' : respuesta}"
        @click="respuesta = !respuesta"
    >
        <p class="pregunta">
            {{ quest.pregunta }}
        </p>
      <transition>

        <p v-if="respuesta" class="respuesta green">
            <hr>
            <ul>
                <li>
                    <b>Respuesta correcta:</b>
                    <span class="respuesta">
                        {{ quest.respuesta }}
                    </span>
                </li>
            </ul>
            
        </p>
    </transition>
    </div>

</template>

<style scoped>
.questblock{
    position: relative;
    background-color: rgb(39, 39, 39);
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    height: 80px;
    min-height: fit-content;
    overflow: hidden;
    transition: all .3s;
    cursor: pointer;
}

p {
    margin: 0;
    line-height: 16px;
}
.respuesta{
    margin-left: 10px;
}

button{
    /* position: absolute;
    bottom: 10px; */
    padding: 5px 20px;
    background-color: lightgreen;
    border: none;
    border-radius: 5px;
}


.v-enter-active, .v-leave-active{
    transition: opacity .3s ease;  
}
.v-leave-to, .v-enter-from{ 
    opacity: 0;
}

.expand{
    height: 140px;
}

</style>