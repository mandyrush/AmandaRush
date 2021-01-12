<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="navbar-item">
        <i class="fas fa-home"></i>
      </router-link>
      <a
        role="button"
        :class="
          menuIsVisible
            ? 'navbar-burger burger is-active'
            : 'navbar-burger burger'
        "
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="menuIsVisible ? 'is-active navbar-menu' : 'navbar-menu'">
      <div class="navbar-start">
        <router-link :to="{ name: 'about' }" class="navbar-item">
          About
        </router-link>

        <router-link :to="{ name: 'skills' }" class="navbar-item">
          Skills
        </router-link>

        <router-link :to="{ name: 'portfolio' }" class="navbar-item">
          Portfolio
        </router-link>
      </div>
      <div class="navbar-end">
        <a
          href="https://github.com/mandyrush"
          target="_blank"
          class="navbar-item media-link"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/amanda-rush"
          target="_blank"
          class="navbar-item media-link"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:mandyrush85@gmail.com" class="navbar-item media-link">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuIsVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsVisible = !this.menuIsVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.navbar {
  background-color: $pink;
}
.navbar {
  a {
    font-weight: bold;
    color: $white;
  }
  a:hover,
  a:focus {
    color: $pink;
  }
  a.navbar-item:hover {
    background-color: $white;
  }
}
.navbar-menu.is-active {
  .navbar-item {
    background-color: $dark;
  }
}
.media-link {
  font-size: 2rem;
  padding: 0 1rem;
  a {
    color: $white;
    &:hover {
      color: $pink;
    }
  }
}
.burger span {
  color: $white;
}
</style>
