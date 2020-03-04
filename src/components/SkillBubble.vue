<template>
  <transition name="fade" appear>
    <div
      :class="colored ? 'skill-bubble colored' : 'skill-bubble'"
      v-if="isVisible"
    ></div>
  </transition>
</template>

<script>
export default {
  props: {
    colored: {
      type: Boolean
    },
    isVisible: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.skill-bubble {
  margin-right: 1rem;
  border: 1px solid $purple;
  border-radius: 50%;
  height: 15px;
  width: 15px;
}

.colored {
  background-color: $blue;
}

.fade-enter {
  opacity: 0.9;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in;
}
</style>
