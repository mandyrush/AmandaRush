<template>
  <div class="home">
    <Header />
    <CurrentLearning />
  </div>
</template>

<script>
import Header from '../components/Header'
import CurrentLearning from '../components/CurrentLearning'

export default {
  components: {
    Header,
    CurrentLearning
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.home {
  background-color: $dark;
  min-height: 100vh;
}
</style>
