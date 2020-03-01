<template>
  <div class="media-links">
    <span>
      <a href="https://github.com/mandyrush" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </span>

    <span>
      <a href="https://linkedin.com/in/amanda-rush" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
    </span>

    <span>
      <a href="mailto:mandyrush85@gmail.com">
        <i class="fas fa-envelope"></i>
      </a>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.media-links {
  display: flex;
  span {
    font-size: 2.5rem;
    padding: 0 1rem;
    a {
      color: $main-font-color;
    }
  }
}
</style>
