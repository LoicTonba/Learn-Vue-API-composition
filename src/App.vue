<template>
  <div>
    <nav>
      <router-link to="/">Rendu déclaratif</router-link> |
      <router-link to="/attributebinding">Liaison d'attribut</router-link> |
      <router-link to="/eventlisteners">Ecouteurs d'évènements</router-link> |
      <router-link to="/formbinding">Liaison de formulaire</router-link> |
      <router-link to="/conditionalredering">Rendu conditionnel</router-link> |
      <router-link to="/listrendering">Rendu de liste</router-link> |
      <router-link to="/computedproperty">Propriété calculée</router-link> |
      <router-link to="/lifecyclehooks">Hooks cycle de vie</router-link> |
      <router-link to="/watchers">Observateurs</router-link> |
      <router-link to="/components">Premier Composant</router-link> |
      <router-link to="/parentcomp">Composant Parent</router-link> |
      <router-link to="/childcomp">Composant Enfant</router-link> |
      <router-link to="/congratulations">Félicitations</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
 
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
