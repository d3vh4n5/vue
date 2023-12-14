<script setup>
defineProps(["objeto"])
defineEmits(['cerrar']);

const info = {
    id: 32,
    url: "Algo.com.ar"
}

</script>

<template>
    <div class="popUp">
        <p>
            Sujeto: <h3 class="green">{{ objeto.name }}</h3>
        </p>
        <p>
            Nombre de usuario: <h3 class="green">{{ objeto.username }}</h3>
        </p>
        <p>
            email: <h3 class="green">{{ objeto.email }}</h3>
        </p>
        <p>
            Telefono: <h3 class="green">{{ objeto.phone }}</h3>
        </p>
        <p>
            Empresa: <h3 class="green">{{ objeto.company.name }}</h3>
        </p>
        <button @click="$emit('cerrar')">X</button>
    </div>
</template>

<style scoped>
.popUp{
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translatex(-50%);
    background-color: black;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 10px 15px 15px rgba(0, 0, 0, 0.377);
}

button{
    border: none;
    font-size: 20px;
    font-weight: bolder;
    background-color: rgba(255, 0, 0, 0.658);
    color: white;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 5px;
}

button:hover{
    cursor: pointer;
    background-color: crimson;
}
</style>
