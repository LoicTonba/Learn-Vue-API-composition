<template>
    <div class="english">
        <h1>=========ENGLISH========</h1>
        <p>Todo id: {{  todoId }}</p>
        <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
        <p v-if="!todoData">Loading...</p>
        <pre v-else>{{ todoData }}</pre>
    </div> <br><br>
    <div class="french">
        <h1>=========FRENCH========</h1>
        <p>Id listeTache: {{  tacheId }}</p>
        <button @click="tacheId++" :disabled="!listeTacheDonnee">Récupérer la tache suivante</button>
        <p v-if="!listeTacheDonnee">Chargement...</p>
        <pre v-else>{{ listeTacheDonnee }}</pre>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const todoId = ref(1)
    const todoData = ref(null)

    const tacheId = ref(1)
    const listeTacheDonnee = ref(null)

    async function fetchData() {
        todoData.value = null
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
        )
        todoData.value = await res.json()
    }

    fetchData()

    async function recupererDonnee() {
        listeTacheDonnee.value = null
        const reponse = await fetch(
             `https://jsonplaceholder.typicode.com/todos/${tacheId.value}`
        )
        listeTacheDonnee.value = await reponse.json()
    }

    recupererDonnee()

    watch(todoId, fetchData)
    watch(tacheId, recupererDonnee)



</script>

<style scoped>
.english {
    background: #e9fc96;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 2.1);
    width: 500px;
    margin: 3px 2px 1px 300px;
}
.french {
    background: #e0a1cb;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 2.1);
    width: 500px;
    margin: 3px 2px 1px 300px;
}
</style>
