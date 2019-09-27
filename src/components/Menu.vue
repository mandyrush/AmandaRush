<template>
  <aside class="menu">
    <ul class="menu-list">
      <li class="about-me" @click="changeTitle('About')">
        <router-link :to="{ name: 'about-me' }">About Me</router-link>
      </li>

      <li class="contact-me" @click="changeTitle('Skills')">
        <router-link :to="{ name: 'skills' }">Skills</router-link>
      </li>

      <li class="portfolio" @click="changeTitle('Portfolio')">
        <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    changeTitle(title) {
      this.$emit('changeTitle', title)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.menu {
  margin-bottom: 3rem;
}
.menu-list {
  height: 100%;
  margin: 0;
  display: flex;
  li {
    list-style: none;
    flex-grow: 1;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      font-size: 1.25rem;
      height: 100%;
    }
  }
  .about-me {
    background-color: $primary-one;
    a:hover {
      background-color: $primary-one-hover;
    }
  }
  .contact-me {
    background-color: $primary-two;
    a:hover {
      background-color: $primary-two-hover;
    }
  }
  .portfolio {
    background-color: $primary-three;
    a:hover {
      background-color: $primary-three-hover;
    }
  }
}

@media (max-width: 768px) {
  .menu-list li a {
    font-size: 1rem;
  }
}
</style>
