<template>
  <div
      id="app"
      :class="{'layout1' : title === 'About', 'layout2' : title === 'Portfolio', 'layout3' : title === 'Skills' }"
  >

      <section class="header-section columns">
          <div class="portfolio-img column is-4-desktop is-12-mobile">
              <img src="/amandaPic.jpg" alt="Image of Amanda">
          </div>

          <div class="header-content column is-8-desktop is-12-mobile">
              <div class="header">
                  <div class="page-title" v-text="title"></div>
                  <div class="name">Amanda Rush</div>
              </div>

              <div class="intro-text content is-italic">
                  <p>
                      <strong class="text-highlight">Greetings!</strong> My name is Amanda. I am a front end web
                      developer with a passion for technology, learning and creating. I have experience with PHP,
                      Laravel and MYSQL with a main focus on Javascript, Vue.js and Vuex.
                  </p>
              </div>

              <FooterLinks/>
          </div>
      </section>


      <section class="content-section">
          <div class="bio">
              <Menu @changeTitle="updateTitle($event)"/>

              <router-view/>
          </div>
      </section>

  </div>
</template>

<script>
  import Menu from '@/./components/Menu';
  import FooterLinks from '@/./components/FooterLinks';

  export default {
      components: {
          Menu,
          FooterLinks
      },
      data() {
          return {
              title: 'About'
          }
      },
      methods: {
          updateTitle($event) {
              this.title = $event;
          }
      }
  };
</script>

<style lang="scss">
    @import '@/variables.scss';

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        font-size: 1.25rem;
        color: $main-font-color;
        margin: 3rem 5rem 5rem 5rem;
    }
    .portfolio-img {
        margin-top: 5rem;
        width: 100%;
        img {
            display: block;
            margin: 0 auto;
            box-shadow: 5px 5px 8px $primary-three;
        }
    }
    .header-section {
        padding: 0 5rem;
    }
    .header-content {
        padding-left: 3rem;
        .header {
            position: relative;
            height: 40%;
            width: 100%;
        }
        .intro-text {
            display: flex;
            align-items: center;
            height: 50%;
            padding: 2rem 0;
            font-size: 1.5rem;
        }
    }
    .layout1 {
        .bio {
            border: 5px solid $primary-one;
        }
        .name, .text-highlight, .footer-links a:hover {
            color: $primary-one;
        }
    }
    .layout2 {
        .bio {
            border: 5px solid $primary-three;
        }
        .name, .text-highlight, .footer-links a:hover {
            color: $primary-three;
        }
    }
    .layout3 {
        .bio {
            border: 5px solid $primary-two;
        }
        .name, .text-highlight, .footer-links a:hover {
            color: $primary-two;
        }
    }
    .page-title, .name {
      position: absolute;
      height: 100%;
      display: flex;
      align-items: flex-end;
    }
    .page-title {
        font-size: 13rem;
        color: $lt-gray;
        line-height: 11rem;
    }
    .name {
        font-size: 3rem;
    }

    .content-section {
        margin: 2rem 0;
    }

    .bio {
        padding: 5rem;
    }

    @media (max-width: 768px) {
        #app {
            margin: 2rem;
        }
        .portfolio-img {
            margin-top: 0;
            img {
                width: 75%;
            }
        }
        .header-section {
            padding: 0;
        }
        .header-content {
            text-align: center;
            padding-left: 0;
            .page-title, .name {
                position: static;
                display: flex;
                justify-content: center;
            }
            .page-title {
                font-size: 7rem;
                line-height: 8rem;
            }
        }
        .bio {
            padding: 1rem;
        }
    }
</style>
