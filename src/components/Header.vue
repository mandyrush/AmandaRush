<template>
  <header class="columns is-vcentered">
    <div class="column is-4-desktop is-12-mobile">
      <ImageGallery />
    </div>

    <div class="column is-8-desktop is-12-mobile header-content content">
      <h1 class="title is-1">Amanda Rush</h1>
      <hr />

      <div class="links">
        <h4>Only 1 available!</h4>
        <MediaLinks />
      </div>

      <p>Price: $TBD</p>

      <ul>
        <li>A hard working and dedicated web developer.</li>
        <li>Friendly and enjoyable to interact with.</li>
        <li>Upgrades and features added regularly.</li>
        <li>Over two years of experience.</li>
      </ul>

      <div class="feature-list">
        <h5>Features Included:</h5>
        <div class="columns">
          <ul class="column">
            <li>HTML</li>
            <li>CSS</li>
            <li>GIT</li>
          </ul>

          <ul class="column">
            <li>Javascript</li>
            <li>VueJS</li>
            <li>React</li>
          </ul>

          <ul class="column">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>RWD</li>
          </ul>
        </div>
        <a href="/">See Full Feature List!</a>
      </div>

      <div class="buttons is-left">
        <button class="button is-primary">Contact Now!</button>
      </div>
    </div>
  </header>
</template>

<script>
import MediaLinks from './MediaLinks'
import ImageGallery from './ImageGallery'

export default {
  components: {
    MediaLinks,
    ImageGallery
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
header {
  padding: 3rem 5rem;
  // background-color: rgba(91, 106, 101, 0.7);
}

.links {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.column.header-content {
  padding: 0 5rem;
  ul li {
    list-style-type: disc;
  }
  .feature-list {
    margin: 1rem 0;
    ul {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>
