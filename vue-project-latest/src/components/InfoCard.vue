<script setup>
defineProps({
    msg: { type: String, required : true },
    title: { type: String },
})
</script>
<template>
    <div class="info-card">
        <h3>{{ title }}</h3>
        <p>
            {{ msg }}
        </p>
    </div>
</template>
<style scoped>
.info-card{
    font-family: monospace;
    position: relative;
    background-color: rgba(94, 94, 64, 0.589);
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
    /* border-left: 5px solid royalblue; */
}

.info-card::before{
    display: block;
    position: absolute;
    content: '';
    width: 5px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: yellowgreen;
}

</style>