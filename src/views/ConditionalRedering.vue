<template>
    <div>
        <p>----------------ENGLISH--------------</p>
        <button @click="toggle">Toggle</button>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😥</h1><br><br>
        <p>-----------------FRENCH---------------</p>
        <button @click="bascule">Basculer</button>
        <h1 v-if="genial">Vue est génial!</h1>
        <h1 v-else>Oh non 😥</h1>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const awesome = ref(true)
    const genial = ref(true)

    function toggle() {
        awesome.value = !awesome.value
    }

    function bascule() {
        genial.value = !genial.value
    }
</script>

<style scoped>

</style>
