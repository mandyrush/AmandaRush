<template>
  <article class="columns is-centered is-vcentered is-marginless">
    <div class="column is-12-mobile is-4-desktop is-3-widescreen">
      <figure class="full-img image">
        <img src="../../public/amandaPic.jpg" alt="Image of Amanda" />
      </figure>
    </div>

    <div class="column is-12-mobile is-8-desktop header-content content">
      <header>
        <div class="title is-3">
          <div class="name" v-if="!isMobile">
            {{ name }}
            <span class="cursor">|</span>
          </div>
          <div class="name" v-else>AMANDA RUSH</div>
        </div>
      </header>

      <transition name="fade" appear>
        <div class="bio">
          <hr />
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
            <span class="values"
              >'HTML', 'CSS', 'Javascript', 'VueJS', 'PHP' ...
            </span>
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
      name: '',
      isMobile: window.innerWidth < 1025
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
    if (!this.isMobile) {
      setTimeout(() => {
        this.printName(this.nameArray.length)
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

article {
  padding: 3rem 5rem;
  background-color: $dark;
  border-bottom: 15px solid $white;
}

.full-img {
  width: 100%;
  max-width: 400px;
  margin: auto;
  img {
    box-shadow: 5px 5px 8px black;
    width: 100%;
    height: auto;
    margin: auto;
  }
}

.column.header-content {
  padding: 0 5rem;
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
}

.cursor {
  color: $dark;
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: 8;
}

@keyframes blink {
  from {
    color: $dark;
  }
  to {
    color: $white;
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-in 8s;
}

.bio {
  font-size: 1.5rem;
  font-weight: bold;
}
.bio hr {
  width: 100%;
  max-width: 700px;
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

@media (max-width: 1025px) {
  article {
    padding: 3rem 0;
  }
  .column.header-content {
    padding: 1rem;
    text-align: center;

    .name {
      width: 100%;
    }
  }
  .cursor {
    display: none;
  }
  .fade-enter-active {
    transition: opacity 0.5s ease-in 1s;
  }
}
</style>
