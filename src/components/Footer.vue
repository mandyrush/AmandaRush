<template>
  <article class="current-learning content">
<!--    <h4 class="title is-3">Look What I'm Learning!</h4>-->
      <div class="columns is-centered learning-list">
          <div class="column is-2 learning-items">
              <i class="fab fa-js-square"></i>
          </div>

          <div class="column is-2 learning-items">
              <i class="fab fa-vuejs"></i>
          </div>

          <div class="column is-2 learning-items">
              <i class="fab fa-php"></i>
          </div>

          <div class="column is-2 learning-items">
              <i class="fab fa-react"></i>
          </div>

          <div class="column is-2 learning-items">
              <i class="fab fa-wordpress"></i>
          </div>
      </div>
    <ContactButton />
  </article>
</template>

<script>
import ContactButton from '../UI/ContactButton'
export default {
  name: 'CurrentLearning',
  components: {
    ContactButton
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.current-learning {
  background-color: $blue;
  padding: 3rem;
}

.title {
  text-align: center;
}

.learning-list {
    i {
        font-size: 3rem;
    }
}

.learning-items {
    text-align: center;
}
</style>
