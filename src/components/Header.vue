<template>
  <article class="columns is-vcentered">
    <div class="column is-4-desktop is-12-mobile">
      <figure class="full-img">
        <img src="../../public/amandaPic.jpg" alt="Image of Amanda" />
      </figure>
    </div>

    <div class="column is-8-desktop is-12-mobile header-content content">
      <header>
        <div class="title is-3">
          <div class="name">{{ name }}</div>
          <div class="cursor">&nbsp;|</div>
        </div>
      </header>
      <hr />

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
  </article>
</template>

<script>
export default {
  data() {
    return {
      nameArray: ['A', 'M', 'A', 'N', 'D', 'A', '_', 'R', 'U', 'S', 'H', '.'],
      name: ''
    }
  },
  methods: {
    printName(length) {
      if (length > 0) {
        setTimeout(() => {
          this.name =
            this.name + ' ' + this.nameArray[this.nameArray.length - length]
          length--
          this.printName(length)
        }, 250)
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.printName(this.nameArray.length)
    }, 2000)
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
article {
  padding: 3rem 5rem;
}

.full-img {
  img {
    box-shadow: 5px 5px 8px #433d3f;
  }
}

.column.header-content {
  padding: 0 5rem;
  ul li {
    list-style-type: disc;
  }
  header {
    .title {
      display: flex;
      align-items: start;
      margin-bottom: 0;
      .name {
        color: #a9dc76;
      }
    }
  }

  @keyframes blink {
    from {
      color: white;
    }
    to {
      color: #2c292d;
    }
  }

  .cursor {
    color: white;
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: 8;
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
