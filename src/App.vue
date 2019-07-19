<template>
  <div id="app">

      <div class="portfolio-img">
          <div>
              <img src="/amandaPic.jpg" alt="Image of Amanda">
          </div>
      </div>

      <div
          class="page-content"
          :class="{'layout1' : title === 'About', 'layout2' : title === 'Portfolio', 'layout3' : title === 'Contact' }"
      >
          <div class="header">
            <div class="page-title" v-text="title"></div>
            <div class="name">Amanda Rush</div>
          </div>

          <div class="bio">
              <div class="bio-content">
                <Menu @changeTitle="updateTitle($event)"/>
                <router-view/>
              </div>

              <FooterLinks/>
          </div>
      </div>

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
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        font-size: 1.25rem;
        color: #333333;
        height: 100vh;
        display: flex;
    }
    .portfolio-img {
        flex-basis: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3rem;
        div {
            width: 75%;
        }
        img {
            max-height: 100%;
            max-width: 100%;
            box-shadow: 5px 5px 8px #888888;
        }
    }
    .page-content {
        flex-basis: 60%;
        height: 100%;
        display: grid;
        grid-template-rows: 30% 60%;
        .header {
            position: relative;
            height: 100%;
        }
    }
    .layout1 {
        .bio-content {
            border: 2px solid #660066;
        }
        .name, .text-highlight, .footer-links a:hover {
            color: #660066;
        }
    }
    .layout2 {
        .bio-content {
            border: 2px solid #0099ff;
        }
        .name, .text-highlight, .footer-links a:hover {
            color: #0099ff;
        }
    }
    .layout3 {
        .bio-content {
            border: 2px solid #ff9900;
        }
        .name, .text-highlight, .footer-links a:hover {
            color: #ff9900;
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
        color: #f2f2f2;
        line-height: 11rem;
    }
    .name {
        font-size: 3rem;
    }
    .bio {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .bio-content {
        display: grid;
        grid-template-columns: 20% 80%;
        margin: 2rem 2rem 2rem 0;
        height: 90%;
        padding: 1rem;
        z-index: 5;
    }
    .description {
        padding: 0 1rem 1rem 1rem;
        height: 100%;
    }

    @media (max-width: 800px) {
        #app {
            flex-wrap: wrap;
            padding: 1rem;
        }
        .portfolio-img {
            flex-basis: 100%;
            padding: 0;
            justify-content: center;
        }
        .page-content {
            flex-basis: 100%;
            grid-template-rows: 25% 75%;
            margin-top: 3rem;
        }
        .page-title {
            font-size: 7rem;
            line-height: 12rem;
        }
        .bio {
            justify-content: flex-start;
        }
        .bio-content {
            margin: 3rem 0;
        }
    }
</style>
