<template>

    <h1 :class="titleClass">Make me red</h1><br>
    <h2 :id="titleId">Make me blue</h2>

</template>

<script setup>
  import { ref } from 'vue'

  const titleClass = ref('title')
  const titleId = ref('title2')
</script>

<style>
.title {
  color: red;
}
#title2 {
  color: blue;
}
</style>