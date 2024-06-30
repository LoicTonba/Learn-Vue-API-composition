<template>
    <div>
       <h1 ref="h1ElementRef">Hello Lifecycle hook</h1>
       <Components>
       </Components>
      
    </div>
</template>

<script setup>
    import { ref,onMounted} from 'vue'

    const h1ElementRef = ref(null)
    onMounted(() => {
        h1ElementRef.value.textContent = 'mounted!'
    })

</script>

<style scoped>

</style>
