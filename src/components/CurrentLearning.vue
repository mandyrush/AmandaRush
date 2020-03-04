<template>
  <article class="current-learning content">
    <h4 class="title is-3">Look What I'm Learning!</h4>
    <div class="columns is-centered learning-list">
      <div class="column is-2 learning-items">
        <ul>
          <li><i class="fab fa-node"></i></li>
          <li>Express</li>
        </ul>
      </div>

      <div class="column is-2 learning-items">
        <ul>
          <li><i class="fab fa-react"></i></li>
          <li><i class="fab fa-js-square"></i></li>
        </ul>
      </div>

      <div class="column is-2 learning-items">
        <ul>
          <li>Sequelize</li>
          <li>Mongoose</li>
        </ul>
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
  li {
    list-style: none;
    font-size: 2rem;
    i {
      font-size: 3rem;
    }
  }
}

.learning-items {
  display: flex;
  justify-content: center;
  ul {
    margin: 0;
    li {
      text-align: center;
    }
  }
}
</style>
