<template>
    <div>
        <h1 @click="showConfetti">🎉Congratulations!</h1>
    </div>
</template>

<script setup>
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
    confetti.addConfetti()
}

showConfetti()
</script>

<style scoped>
    h1 {
        text-align: center;
        cursor: pointer;
        margin-top: 3em;
    }
</style>
