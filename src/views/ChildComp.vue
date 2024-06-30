<template>
    <div>
        <h1>C'est un composant enfant</h1>
        <h2>{{ msg || 'No props passed yet' }}</h2>
        <slot>Fallback content(message de secours)</slot>

    </div>
</template>

<script setup>

    const props = defineProps({
        msg: String
    })
</script>

<style scoped>

</style>
