<template>
  <div class="page-content">
      <div class="portfolio-img">
          <img src="/amandaPic.jpg" alt="Image of Amanda">
      </div>

      <div class="header">
          <div class="header-content">
              <div class="page-title" v-text="title"></div>
              <div class="name"><span>Amanda Rush</span></div>
          </div>

          <div class="bio">

              <div class="content">
                  <Menu @changeTitle="updateTitle($event)"/>

                  <router-view/>
              </div>

              <div class="contact-info">
                  <span><i class="fab fa-github"></i></span>
                  <span><i class="fab fa-linkedin"></i></span>
                  <span><i class="fas fa-envelope"></i></span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import AboutMe from '@/views/AboutMe';
    import Menu from '@/./components/Menu';

    export default {
        name: "home",
        components: {
            AboutMe,
            Menu
        },
        data() {
            return {
                title: 'About'
            }
        },
        computed: {
            routePath() {
                return this.$route.name;
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
    body {
        margin: 0;
    }
    .page-content {
        height: 100vh;
        display: flex;
    }
    .portfolio-img {
        flex-basis: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3rem;
        img {
            width: 75%;
            height: auto;
        }
    }
    .header {
        flex-basis: 60%;
        height: 100%;
        display: grid;
        grid-template-rows: 30% 60%;
        .header-content {
            position: relative;
            height: 100%;
        }
    }
    .page-title {
        font-size: 13rem;
        color: #f2f2f2;
        position: absolute;
        height: 100%;
    }
    .name {
        font-size: 3rem;
        color: rebeccapurple;
        position: absolute;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
    .bio {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .content {
        display: grid;
        grid-template-columns: 25% 75%;
        min-height: 50%;
        margin: 3rem 3rem 3rem 0;
        border: 2px solid rebeccapurple;
        padding: 1rem;
        z-index: 5;
    }
    .contact-info {
        display: flex;
        justify-content: center;
        width: 100%;
        span {
            padding-right: 2rem;
            font-size: 2rem;
            color: #333333;
        }
    }

    @media (max-width: 800px) {
        .page-content {
            flex-wrap: wrap;
            padding: 1rem;
        }
        .portfolio-img {
            flex-basis: 100%;
            padding: 0;
            justify-content: center;
        }
        .header {
            flex-basis: 100%;
            grid-template-rows: 20% 80%;
        }
        .title {
            font-size: 7rem;
        }
        .content {
            margin: 3rem 0;
        }
    }
</style>
