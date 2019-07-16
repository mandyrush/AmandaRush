<template>
  <div class="page-content">
      <div class="portfolio-img">
          <img src="/amandaPic.jpg" alt="Image of Amanda">
      </div>

      <div class="header">
          <div class="header-content">
              <div class="title">About</div>
              <div class="name"><span>Amanda Rush</span></div>
          </div>

          <div class="bio">
              <div class="bio-content">

                  <div class="content">
                      <ul class="nav">
                          <li class="about-me">
                              <router-link :to="{ name: 'about-me' }">About Me</router-link>
                          </li>

                          <li class="portfolio">
                              <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
                          </li>

                          <li class="contact-me">
                              <router-link :to="{ name: 'contact-me' }">Contact Me</router-link>
                          </li>
                      </ul>

                      <div class="description" v-if="routePath === 'home'">
                          <AboutMe></AboutMe>
                      </div>

                      <router-view v-else></router-view>
                  </div>

                  <div class="contact-info">
                      <span><i class="fab fa-github"></i></span>
                      <span><i class="fab fa-linkedin"></i></span>
                      <span><i class="fas fa-envelope"></i></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import AboutMe from '@/views/AboutMe';

    export default {
        name: "home",
        components: {
            AboutMe
        },
        computed: {
            routePath() {
                return this.$route.name;
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
    .title {
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
        align-items: flex-start;
    }
    .bio-content {
        width: 100%;
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .content {
        display: grid;
        grid-template-columns: 25% 75%;
        height: auto;
        margin: 3rem 0;
        border: 2px solid rebeccapurple;
        padding: 1rem;
    }
    .nav {
        height: 100%;
        margin: 0 .5rem 0 0;
        white-space: nowrap;
        padding: 0;
        display: flex;
        flex-direction: column;
        li {
            list-style: none;
            flex-grow: 1;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
                text-decoration: none;
                color: white;
            }
        }
        .about-me {
            background-color: rebeccapurple;
        }
        .portfolio {
            background-color: #9966cc;
        }
        .contact-me {
            background-color: #be9fdf;
        }
    }
    .description {
        padding: 1rem;
        height: 100%;
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
        .bio-content {
            padding: 0;
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
    }
</style>
