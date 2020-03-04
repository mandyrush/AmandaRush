<template>
  <div id="app">
    <Navigation />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import './assets/sass/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $dark;
  min-height: 100vh;
}
main {
  height: 100%;
}
</style>
