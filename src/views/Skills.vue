<template>
  <div class="description content">
    <div class="columns skill-levels">
      <div class="column is-4">
        <h4>HTML/CSS</h4>
        <ul>
          <li><p class="regular-use">HTML5</p></li>
          <li><p class="regular-use">Bulma</p></li>
          <li><p class="regular-use">CSS</p></li>
          <li><p class="regular-use">SCSS</p></li>
          <li><p class="regular-use">Flexbox</p></li>
          <li><p class="familiar">Bootstrap</p></li>
          <li><p class="familiar">SASS</p></li>
          <li><p class="familiar">CSS Grid</p></li>
          <li><p class="learning">Canvas</p></li>
        </ul>
      </div>

      <div class="column is-4">
        <h4>Javascript</h4>
        <ul>
          <li><p class="regular-use">Vue.js</p></li>
          <li><p class="regular-use">Vuex</p></li>
          <li><p class="regular-use">Vue Router</p></li>
          <li><p class="regular-use">Vue CLI</p></li>
          <li><p class="regular-use">Axios</p></li>
          <li><p class="familiar">Javascript</p></li>
          <li><p class="familiar">NPM</p></li>
        </ul>
      </div>

      <div class="column is-4">
        <h4>PHP7</h4>
        <ul>
          <li><p class="familiar">Laravel</p></li>
          <li><p class="occasional-use">PHP7</p></li>
        </ul>
      </div>
    </div>

    <div class="columns skill-levels">
      <div class="column is-4">
        <h4>Tools</h4>
        <ul>
          <li><p class="regular-use">PhpStorm</p></li>
          <li><p class="regular-use">Devtools</p></li>
          <li><p class="regular-use">Github</p></li>
          <li><p class="familiar">Sublime</p></li>
          <li><p class="occasional-use">iterm/Terminal</p></li>
          <li><p class="occasional-use">Photoshop</p></li>
        </ul>
      </div>

      <div class="column is-4">
        <h4>Database</h4>
        <ul>
          <li><p class="familiar">MYSQL</p></li>
          <li><p class="occasional-use">Sequel Pro</p></li>
        </ul>
      </div>

      <div class="column is-4">
        <h4>Methodologies</h4>
        <ul>
          <li><p class="familiar">RWD</p></li>
          <li><p class="occasional-use">MVC</p></li>
          <li><p class="learning">RESTful</p></li>
          <li><p class="learning">AJAX</p></li>
        </ul>
      </div>
    </div>

    <div class="key" v-if="!isMobile">
      <ul>
        <li class="learning">Learning</li>
        <li class="occasional-use">Occasional Use</li>
        <li class="familiar">Familiar</li>
        <li class="regular-use">Regular Use</li>
        <li class="professional">Professional</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return window.innerWidth <= 768
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.skill-levels {
  .columns:not(:last-child) {
    margin-bottom: 3rem;
  }
  .column {
    padding: 1rem;
  }
  ul {
    margin-left: 0;
    li {
      list-style: none;
      border: 1px solid $primary-three;
      background-color: $lt-gray;
      color: $white;
    }
  }
  .content li + li {
    margin-top: 1rem;
  }
  li p {
    padding-left: 0.5rem;
    height: 100%;
  }
}

.learning {
  width: 25%;
  background-image: linear-gradient(
    to right,
    $primary-two-gradient6,
    $primary-two-gradient7
  );
}
.occasional-use {
  width: 40%;
  background-image: linear-gradient(
    to right,
    $primary-two-gradient4,
    $primary-two-gradient5
  );
}
.familiar {
  width: 60%;
  background-image: linear-gradient(
    to right,
    $primary-two-gradient2,
    $primary-two-gradient3
  );
}
.regular-use {
  width: 80%;
  background-image: linear-gradient(
    to right,
    $primary-two,
    $primary-two-gradient1
  );
}
.professional {
  background-color: $primary-two;
}

.key {
  ul {
    display: flex;
    justify-content: center;
    margin: 3rem 0 0 0;
    li {
      margin-top: 0;
      list-style: none;
      padding: 0 0.5rem;
      width: 12%;
      font-size: 1rem;
      color: $white;
    }
  }
}
</style>
