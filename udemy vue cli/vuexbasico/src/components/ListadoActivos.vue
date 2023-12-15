<template>

    <div class="container">
        <p>
            {{ listadoActivos }}
        </p>
    </div>

</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters(['listadoActivos'])
}
</script>