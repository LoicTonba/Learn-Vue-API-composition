<template>
    <div>
        <P>--------------------ENGLISH---------------------------------</P>
        <form @submit.prevent="addTodo">
            <input v-model="newTodo" type="text" placeholder="Type Here">
            <button>Add Todo</button>
        </form>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.text }}
                <button @click="removeTodo(todo)">X</button>
            </li>
        </ul>
        <P>--------------------FRENCH---------------------------------</P>
        <form v-on:submit.prevent="ajouterTache">
            <input v-model="nouvelletache" required type="text" placeholder="Entrer la tache">
            <button>Ajouter Tache</button>
        </form>
        <ul>
            <li v-for="tache in listeTache" :key="tache.unique">{{ tache.text }}
             <button v-on:click="supprimerTache(tache)">X</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
// give each todo a unique id
    let id = 0
    let unique = 0

    
        
    const newTodo = ref('')
    const todos = ref([
        {id: id++, text: 'Learn HTML & CSS'},
        {id: id++, text: 'Learn Javascript'},
        {id: id++, text: 'Learn Vue'}
    ])
    const nouvelletache = ref('')

    const listeTache = ref([
        {unique: unique++, text: 'Apprendre le rendu déclaratif'},
        {unique: unique++, text: 'Apprendre les Liaisons d\'attributs'},
        {unique: unique++, text: 'Apprendre les écouteurs d\'évènements'},
        {unique: unique++, text: 'Apprendre les Liaisons de formulaire'},
        {unique: unique++, text: 'Apprendre le rendu conditionnel'},
        {unique: unique++, text: 'Apprendre le rendu de Liste'},
        {unique: unique++, text: 'Apprendre la propriété calculée'},
        {unique: unique++, text: 'Apprendre le cycle de vie et référence de modèle'},
        {unique: unique++, text: 'Apprendre l\'observateur'},
        {unique: unique++, text: 'Apprendre les composants'},
        {unique: unique++, text: 'Apprendre les accessoires'},
        {unique: unique++, text: 'Apprendre les Emets'},
        {unique: unique++, text: 'Apprendre les machines à sous'},
           
    ]) 
    
    
    
       function addTodo() {
            todos.value.push({ id: id++, text: newTodo.value })
            newTodo.value = ref('')
        }

        function removeTodo(todo) {
            todos.value = todos.value.filter((t) => t !== todo)
        }

        function ajouterTache() {
            listeTache.value.push({unique: unique++, text: nouvelletache.value})
            nouvelletache.value = ref('')
        }

        function supprimerTache(tache) {
            listeTache.value = listeTache.value.filter((t) => t !== tache)

        }
    

</script>

<style scoped>

</style>
