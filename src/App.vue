<template>
  <div id="app">
    <Navigation />

    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/sass/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $dark;
  min-height: 100vh;
  background: $dark;
}
main {
  height: 100%;
}
</style>
