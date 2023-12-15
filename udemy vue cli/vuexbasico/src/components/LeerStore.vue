<template>
    <div class="container">

        <h3>
            El valor  es: {{ this.$store.state.contador }}
        </h3>
    </div>
</template>

<script>

import { store } from '../store/store';

export default {
    store,
}


</script>