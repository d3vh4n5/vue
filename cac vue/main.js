const { createApp, ref } = Vue
  createApp({
    
    data(){
        return {
            mensaje: 'Hola mundo VUE',
            curso: "Codo a codo",
            desarrollador: "Pepito developer",
            productos: ["Zapatos", "coca", "galletitas"]
        }
    }
    
  }).mount('#app')