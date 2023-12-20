<script setup>
    const preguntas = [];
    
    function agregarDatos() {
        const input1 = document.getElementById('input1');
        const input2 = document.getElementById('input2');
        
        // Verificar si se ingresaron datos en ambos inputs
        if (input1 && input2) {
            let datos = {};
            // Agregar datos al objeto
            datos.input1 = input1.value;
            datos.input2 = input2.value;

            preguntas.push(datos)
            
            input1.value = '';
            input2.value = '';

            // Mostrar el objeto actualizado
            mostrarObjeto();
        } else {
            alert('Por favor, llene ambos campos.');
        }
    }

    function mostrarObjeto() {
        const datosObjeto = document.getElementById('datosObjeto');
        datosObjeto.innerHTML = '';
        preguntas.forEach(elem => {
            datosObjeto.innerHTML += JSON.stringify(elem, null, 2);
        })
        // datosObjeto.textContent = JSON.stringify(datos, null, 2);
    }

    function descargarJSON() {
        // Verificar si hay datos para descargar
        if (Object.keys(preguntas).length === 0) {
            alert('No hay datos para descargar. Llene los campos y haga clic en "Agregar a objeto".');
            return;
        }

        const contenidoJSON = JSON.stringify(preguntas, null, 2);
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

    <h1>Guardar en JSON</h1>

    <label for="input1">Input 1:</label>
    <br>
    <textarea name="input1" id="input1" cols="30" rows="10" placeholder="Ingrese la pregunta"></textarea>
    <!-- <input type="text" id="input1" placeholder="Ingrese valor para Input 1"> -->
    <br>
    <label for="input2">Input 2:</label>
    <br>
    <textarea name="input2" id="input2" cols="30" rows="10" placeholder="Ingrese la respuesta"></textarea>
    <!-- <input type="text" id="input2" placeholder="Ingrese valor para Input 2"> -->
    <br>
    <button onclick="agregarDatos()">Agregar a objeto</button>

    <h2>Datos en el objeto:</h2>
    <pre id="datosObjeto"></pre>

    <button onclick="descargarJSON()">Descargar JSON</button>

</template>