<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="card.imageSrc" :alt="card.imageAlt" :title="card.imageAlt" class="" />
      </figure>
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
@import '../assets/sass/main.scss';
.card {
  height: 100%;
  box-shadow: 5px 5px 8px black;
  img {
    filter: grayscale(100%);
  }
}
.content figure img {
  display: block;
}
.card img:hover {
  filter: none;
}
.content figure {
  margin: 0;
}
</style>
