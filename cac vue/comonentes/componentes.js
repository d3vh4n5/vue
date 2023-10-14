const componente1= {
    template: `<h2>Hola {{usuario}}</h2>`,
    data(){
        return {
            usuario : "Jansito"
        }
    }
};

const componente2 = {
    template: `
        <div
            @:mouseover="cambiarNombre()"
            @:mouseout="reestablecerNombre()"
        >
            <h4><span id="nombre">{{titulo}}</span></h4>
        </div>
    `,
    data(){
        return{
            titulo:'esto seria el titulo',
            tituloOriginal : "titulo original"
        }
    },
    methods:{
        cambiarNombre(){
            this.titulo = "El mouse esta sobre"
        },
        reestablecerNombre(){
            this.titulo = this.tituloOriginal;
        }
    }
}

const miAplicacion = Vue.createApp({
    components: {
        saludo: componente1,
        mouse: componente2
    }

}).mount("#app")