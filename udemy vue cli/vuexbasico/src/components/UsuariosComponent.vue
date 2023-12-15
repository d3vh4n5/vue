<template>

    <div class="container">
        <ul>
            <li :key="usuario.nombre" v-for="usuario in usuarios">{{ usuario.nombre }}</li>
        </ul>
        <p>Listado de usuarios activos:</p>
        <ListadoActivos/>
    </div>

</template>
<script>
import ListadoActivos from './ListadoActivos.vue';
import { mapState } from 'vuex';

export default {
    computed: mapState(['usuarios']),
    components:{
        ListadoActivos
    }
}
</script>