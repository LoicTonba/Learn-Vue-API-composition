<template>
   <div>
        <div class="english">
            <h1>-----------------------------ENGLISH-------------------------------</h1>
            <form @submit.prevent="addTodo">
                <input v-model="newTodo" type="text" required placeholder="Type Here">
                <button>Add Todo</button>
            </form>
            <ul>
                <li v-for="todo in filteredTodos" :key="todo.id">
                    <input  v-model="todo.done" type="checkbox">
                    <span :class="{ done: todo.done }">{{ todo.text }}</span>
                    <button @click="removeTodo(todo)">X</button>
                </li>
            </ul>
            <button @click="hideCompleted = !hideCompleted">
                {{ hideCompleted ? "Show all" : "Hide completed" }}
            </button>
        </div><br><br>
        <div class="french">
            <h1>-------------------------------FRENCH-------------------------------</h1>
            <form @submit.prevent="ajouterTache">
                <input v-model="nouvelleTache" type="text" required placeholder="Entrer une tache">
                <button>Ajouter une tache</button>
            </form>
            <ul>
                <li v-for="tache in filtrerListeTache" :key="tache.unique">
                    <input v-model="tache.fait" type="checkbox">
                    <span :class="{ fait: tache.fait }">{{ tache.text }}</span>
                    <button @click="supprimerTache(tache)">X</button>
                </li>
            </ul>
            <button @click="cacherCompleter = !cacherCompleter">
                {{ cacherCompleter ? 'Afficher Toutes les taches' : 'Masquer les taches complètes' }}
            </button>
        </div>
   </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    let id = 0
    let unique = 0

    const newTodo = ref('')
    const hideCompleted = ref(false)
    const todos = ref([
        {id:id++, text:'Learn HTML5 and CSS3', done: true},
        {id:id++, text:'Learn JAVASCRIPT', done: true},
        {id:id++, text:'Learn VUE JS3', done: true},
        {id:id++, text:'Learn NODE JS', done: false},
    ])
    
    const nouvelleTache = ref('')
    const cacherCompleter = ref(false)
    const listeTache = ref([
        {unique: unique++, text: 'Apprendre le rendu déclaratif', fait: true},
        {unique: unique++, text: 'Apprendre les Liaisons d\'attributs', fait: true},
        {unique: unique++, text: 'Apprendre les écouteurs d\'évènements', fait: true},
        {unique: unique++, text: 'Apprendre les Liaisons de formulaire', fait: true},
        {unique: unique++, text: 'Apprendre le rendu conditionnel', fait: true},
        {unique: unique++, text: 'Apprendre le rendu de Liste', fait: true},
        {unique: unique++, text: 'Apprendre la propriété calculée', fait: true},
        {unique: unique++, text: 'Apprendre le cycle de vie et référence de modèle', fait: false},
        {unique: unique++, text: 'Apprendre l\'observateur', fait: false},
        {unique: unique++, text: 'Apprendre les composants', fait: false},
        {unique: unique++, text: 'Apprendre les accessoires', fait: false},
        {unique: unique++, text: 'Apprendre les Emets', fait: false},
        {unique: unique++, text: 'Apprendre les machines à sous', fait: false},
           
    ])
        
    

    const filteredTodos = computed(() => {
        return hideCompleted.value 
        ? todos.value.filter((t) => !t.done)
        : todos.value
    })
            
        
    const filtrerListeTache = computed(() => {
        return cacherCompleter.value
        ? listeTache.value.filter((t) => !t.fait)
        : listeTache.value
    }) 
           
        
    
    
    function addTodo() {
        todos.value.push({id:id++, text: newTodo.value})
        newTodo.value = ref('')
    }

    function removeTodo(todo) {
        todos.value = todos.value.filter((t) => t !== todo)
    }
    
    function ajouterTache(){
        listeTache.value.push({unique: unique++, text: nouvelleTache.value})
        nouvelleTache.value = ref('')
    }
    
    function supprimerTache(tache){
        listeTache.value = listeTache.value.filter((t) => t !== tache)
    }
    

</script>

<style scoped>
.done {
    text-decoration: line-through;
}
.english{
    background: #f3e0e0;
    border-radius: 10px;
    text-align: center; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 1.2);
    width: 900px;
    padding: 20px;

}
.fait {
    text-decoration: line-through;
}
.french{
    background: #cee4ee;
    border-radius: 10px;
    text-align: center;   
    box-shadow: 0 0 10px rgba(0, 0, 0, 1.2);
    width: 900px;   
    padding: 20px;
}
</style>
