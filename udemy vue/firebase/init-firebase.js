// Import the functions you need from the SDKs you need

//Esto los comento porque puse los links de las cdn
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1jCrkBG57aUCUs96Lto9eJ5w7RFGQ9qM",
    authDomain: "vue-pruebas-ac790.firebaseapp.com",
    projectId: "vue-pruebas-ac790",
    storageBucket: "vue-pruebas-ac790.appspot.com",
    messagingSenderId: "611986346625",
    appId: "1:611986346625:web:400ee4d647f68f59bef380"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Accedo ala "estantería" donde guardare las colecciones
const db = firebase.firestore();
// Tomer una carpeta - coleccion
const coleccion = db.collection('usuarios')


new Vue({
    el:'#main',
    data:{
        nombre: null,
        edad: null,
        usuarios: [],
    },
    methods:{
        addUsuario(){
            console.log('nombre: ', this.nombre, ' edad: ', this.edad)
            coleccion.add({
                nombre: this.nombre,
                edad: this.edad
            }).then(()=>{
                this.$mount() // Esto rejecuta el mounted()
            })
            this.nombre = null;
            this.edad = null;
        },
        deleteUser(id){
            coleccion.doc(id).delete()
                .then(()=>{
                    this.$mount() // Esto rejecuta el mounted()
                })
        },
        updateUser(id){
            // Funciona tanto con set como con update
            coleccion.doc(id).update({nombre: this.nombre, edad:this.edad})
            // coleccion.doc(id).set({nombre: this.nombre, edad:this.edad})
                .then(()=>{
                    this.$mount();
                })
        }
    },
    mounted(){
        this.usuarios = [];
        // Consulta a Firebase
        console.log("Mensaje de control")
        // coleccion.get('usuarios', resp =>{
        //     console.log("Mensaje de control2")
        //     console.log(resp)
        // })
        coleccion.get()
            .then( resp=>{
                console.log(resp.docs)
                resp.docs.map( item =>{
                    this.usuarios.push({id: item.id, data:item.data()})
                })
            })
    }
})