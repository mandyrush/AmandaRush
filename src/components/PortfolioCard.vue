<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="card.imageSrc" :alt="card.imageAlt" :title="card.imageAlt" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ card.title }}</p>
      <p class="subtitle is-5" v-if="card.link">{{ card.imageAlt }}</p>
      <p class="subtitle is-5" v-else>Coming Soon!</p>
      <p class="content">{{ card.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  box-shadow: 5px 5px 8px black;
}
.subtitle {
  color: #ea5c86;
  font-weight: bold;
}
</style>
