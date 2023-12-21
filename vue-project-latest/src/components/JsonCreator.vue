<script setup>
import {ref} from 'vue';

const preguntas = ref([]);
const input1 = ref("");
const input2 = ref("");
 

    // const preguntas = [];
    
    function agregarDatos() {
        
        // Verificar si se ingresaron datos en ambos inputs
        if (input1 && input2) {
            let datos = {};
            // Agregar datos al objeto
            datos.pregunta = input1.value;
            datos.respuesta = input2.value;
            console.log(input1.value)
            console.log(input2.value)
            preguntas.value.push(datos)
            
            input1.value = '';
            input2.value = '';

            // Mostrar el objeto actualizado
            mostrarObjeto();
        } else {
            alert('Por favor, llene ambos campos.');
        }
    }

    function mostrarObjeto() {
        console.log(preguntas.value)
        // const datosObjeto = document.getElementById('datosObjeto');
        // datosObjeto.innerHTML = '';
        // preguntas.forEach(elem => {
        //     datosObjeto.innerHTML += JSON.stringify(elem, null, 2);
        // })
        // datosObjeto.textContent = JSON.stringify(datos, null, 2);
    }

    function descargarJSON() {
        // Verificar si hay datos para descargar
        if (Object.keys(preguntas.value).length === 0) {
            alert('No hay datos para descargar. Llene los campos y haga clic en "Agregar a objeto".');
            return;
        }

        const contenidoJSON = JSON.stringify(preguntas.value, null, 2);
        const blob = new Blob([contenidoJSON], { type: 'application/json' });

        // Crear un enlace para descargar el archivo
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = window.URL.createObjectURL(blob);
        enlaceDescarga.download = 'datos.json';

        // Simular clic en el enlace para iniciar la descarga
        enlaceDescarga.click();
    }
</script>

<template>
    
    <p>
        Para que los componentes se animen bien al entrar, deben estar 
        envueltos en 1 solo elemento, como este no lo está, aparece mal 
        al momento de hacerle click a la ruta.
    </p>

https://vueschool.io/lessons/vue-fundamentals-capi-user-events-in-vue-3

    <h1>Guardar en JSON</h1>

    <label for="input1">Pregunta:</label>
    <br>
    <textarea 
        v-model.trim="input1"  
        cols="30" rows="10" 
        placeholder="Ingrese la pregunta"
        class="form-control"
    ></textarea>
    <!-- <input type="text" id="input1" placeholder="Ingrese valor para Input 1"> -->
    <br>
    {{ input1 }}
    <label for="input2">Respuesta correcta:</label>
    <br>
    <textarea 
        v-model="input2"  
        cols="30" 
        rows="10" 
        placeholder="Ingrese la respuesta"
        class="form-control"
    ></textarea>
    <!-- <input type="text" id="input2" placeholder="Ingrese valor para Input 2"> -->
    <br>
    <!-- <button @click="agregarDatos">Agregar a objeto</button> -->
    <button 
        @click="preguntas.push({pregunta: input1, respuesta: input2})"
        class="btn btn-primary"
    >Agregar a objeto</button>

    <h2>Datos en el objeto:</h2>
    <pre id="datosObjeto">
        {{ preguntas }}
    </pre>

    <button @click="descargarJSON" class="btn btn-success">Descargar JSON</button>

</template>
<style scoped>

textarea{
    resize: vertical;
    width: 100%;
}

</style>