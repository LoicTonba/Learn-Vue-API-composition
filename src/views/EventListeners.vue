<template>
    <div>
        <button @click="increment">Count is: {{  count }}</button> <br><br>
        <button @click="decrement">décompte est: {{  down }}</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const count = ref(0)
    const down = ref(0)

    function increment() {
        count.value++
    }

    function decrement() {
        down.value--
    }


</script>
<style scoped>

</style>