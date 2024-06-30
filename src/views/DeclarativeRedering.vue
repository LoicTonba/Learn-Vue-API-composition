<template>
    <div>
        <h1>{{ message  }}</h1>
        <h1>{{ msg  }}</h1>
        <p>Count is: {{ counter.count  }}</p>
        <h1>{{ message.split('').reverse().join('')  }}</h1>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const counter = reactive({ count: 0 })
    const message = ref('Make me dynamic!')
    const msg = ref('Hello World!')
    
</script>

<style scoped>

</style>