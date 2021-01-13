<template>
  <!--  <article class="current-learning content">-->
  <!--    &lt;!&ndash;    <h4 class="title is-3">Look What I'm Learning!</h4>&ndash;&gt;-->
  <!--    <div class="columns is-centered learning-list">-->
  <!--      <div class="column is-2 learning-items">-->
  <!--        <i class="fab fa-js-square"></i>-->
  <!--      </div>-->

  <!--      <div class="column is-2 learning-items">-->
  <!--        <i class="fab fa-vuejs"></i>-->
  <!--      </div>-->

  <!--      <div class="column is-2 learning-items">-->
  <!--        <i class="fab fa-php"></i>-->
  <!--      </div>-->

  <!--      <div class="column is-2 learning-items">-->
  <!--        <i class="fab fa-react"></i>-->
  <!--      </div>-->

  <!--      <div class="column is-2 learning-items">-->
  <!--        <i class="fab fa-wordpress"></i>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <ContactButton />-->
  <!--  </article>-->
  <footer>
    <div class="social-icons">
      <a
        href="https://github.com/mandyrush"
        target="_blank"
        class="footer-item media-link"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/amanda-rush"
        target="_blank"
        class="footer-item media-link"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:mandyrush85@gmail.com" class="footer-item media-link">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<script>
// import ContactButton from '../UI/ContactButton'
export default {
  name: 'CurrentLearning',
  components: {
    // ContactButton
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
//.current-learning {
//  background-color: $blue;
//  padding: 3rem;
//}
//
//.title {
//  text-align: center;
//}
//
//.learning-list {
//  i {
//    font-size: 3rem;
//  }
//}
//
//.learning-items {
//  text-align: center;
//}
footer {
  background: $blue;
  padding: 3rem 1rem;
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    a i {
      color: $dark;
      font-size: 2rem;
      padding: 0 1rem;
    }
    a i:hover {
      color: $white;
      background-color: transparent;
    }
  }
}
</style>
