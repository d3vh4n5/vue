<template>
    <div>

        <h1>Actions con Vuex</h1>
        
        <ul>
            <li v-for="user in usuario" :key="user.id"> {{ user.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['usuario'])
    },
    methods:{
        ...mapActions(['getUsuarios'])
    },
    mounted() {
        this.getUsuarios();
    }
}
</script>