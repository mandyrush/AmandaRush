<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'home' }" class="navbar-item">
          <i class="fas fa-home"></i>
        </router-link>

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
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #66D2B3;
}
</style>
