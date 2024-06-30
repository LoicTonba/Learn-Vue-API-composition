<template>
    <div>
        <input :value="text" type="text" @input="onInput" placeholder="Type here">
        <p>{{ text }}</p> <br><br>
        <input v-model="message" type="text" placeholder="Entrer votre message">
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const text = ref('')
    const message = ref('')
    
    function onInput(e) {
        text.value = e.target.value
    }
</script>

<style scoped>

</style>
