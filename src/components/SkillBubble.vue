<template>
  <div :class="colored ? 'skill-bubble colored' : 'skill-bubble'"></div>
</template>

<script>
export default {
  props: {
    colored: {
      type: Boolean
    }
  },
  data() {
    return {
      time: 2
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-bubble {
  margin-right: 1rem;
  border: 1px solid black;
  border-radius: 50%;
  height: 15px;
  width: 15px;
}

.colored {
  background-color: purple;
}
</style>
