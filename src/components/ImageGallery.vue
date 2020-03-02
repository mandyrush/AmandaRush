<template>
  <div class="image-gallery">
    <figure class="full-img">
      <img src="../../public/amandaPic.jpg" alt="Image of Amanda" />
    </figure>

<!--    <div class="thumbnails">-->
<!--      <figure class="thumbnail">-->
<!--        <img src="../../public/amandaPic.jpg" />-->
<!--      </figure>-->
<!--      <figure class="thumbnail">-->
<!--        <img src="../../public/amandaPic.jpg" />-->
<!--      </figure>-->
<!--      <figure class="thumbnail">-->
<!--        <img src="../../public/amandaPic.jpg" />-->
<!--      </figure>-->
<!--    </div>-->
  </div>
</template>

<style lang="scss" scoped>
.full-img {
  img {
    box-shadow: 5px 5px 8px #433d3f;
  }
}

.thumbnails {
  display: flex;
  flex-shrink: 1;
}
.thumbnail {
  padding: 0.5rem;
}
</style>
