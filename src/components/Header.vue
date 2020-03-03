<template>
  <article class="columns is-vcentered">
    <div class="column is-4-desktop is-12-mobile test">
      <figure class="full-img image">
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

      <transition name="fade" appear>
        <div class="bio">
          <hr>
          <p>
            <span class="varType">let </span>
            <span class="propertyName">qualities </span>
            <span class="equalSign">= </span>
            <span class="bracket">[ </span>
            <span class="values">'Creative', 'Dedicated', 'Driven', ... </span>
            <span class="bracket">]</span>
          </p>
          <p>
            <span class="varType">let </span>
            <span class="propertyName">skills </span>
            <span class="equalSign">= </span>
            <span class="bracket">[ </span>
            <span class="values">'HTML', 'CSS', 'Javascript', 'VueJS', 'React' ... </span>
            <span class="bracket">]</span>
          </p>
        </div>
      </transition>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      nameArray: ['A', 'M', 'A', 'N', 'D', 'A', '_', 'R', 'U', 'S', 'H'],
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
  background-color: $dark;
}

.full-img {
  img {
    box-shadow: 5px 5px 8px black;
    max-width: 80%;
    height: auto;
    margin: auto;
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
        color: $green;
      }
    }
  }

  @keyframes blink {
    from {
      color: $dark;
    }
    to {
      color: $white;
    }
  }

  .cursor {
    color: $dark;
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: 8;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.5s ease-in 8s;
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
.bio {
  /*font-weight: bold;*/
  font-size: 1.5rem;
}
.varType {
  color: $blue;
}
.propertyName {
  color: $white;
}
.equalSign {
  color: $pink;
}
.bracket {
  color: $white;
}
.values {
  color: $yellow;
}
</style>
