<template>
    <div>
        <h1>{{ greeting }}</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['response'])
emit('response', 'hello from child First Component!')
const greeting = ref('Hello from First Component!')


</script>