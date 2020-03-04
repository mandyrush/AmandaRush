<template>
  <div class="portfolio">
    <div class="card-group columns is-multiline">
      <div
        v-for="card in cards"
        :key="card.id"
        class="column is-5-desktop is-12-mobile"
      >
        <a
          :href="card.link"
          target="_blank"
          v-if="card.link"
          class="image-link"
        >
          <PortfolioCard :card="card" />
        </a>

        <PortfolioCard v-else :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '../components/PortfolioCard'

export default {
  name: 'Portfolio',
  components: {
    PortfolioCard
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Blue Bow Fashion',
          imageSrc: require('../../public/blue_bow.jpg'),
          imageAlt: 'bluebowfashion.com',
          link: 'http://bluebowfashion.com/',
          content:
            'This began as a Laravel project but as it progressed I refactored to include Vue and Javascript. It was also built to be fully responsive and includes a contact form with validation and Bulma as the css framework.'
        },
        {
          id: 2,
          title: 'Cats Wander',
          imageSrc: require('../../public/cats_wander.jpg'),
          imageAlt: 'catswander.com',
          link: 'http://catswander.com/',
          content:
            "My husband and I were lucky enough to travel through Europe for a little over a year while he worked remotely and I learned as much as I could about PHP, Laravel, MYSQL and the beginnings of Javascript. When planning our trip we couldn't bear to part with our two furry friends so we decided to take them along. As you can imagine our adventures were not your typical travel experiences so I created this blog to document each step of the way. It was my very first project and there are plenty more stories to come..."
        },
        {
          id: 3,
          title: 'Hammond Visual Media',
          imageSrc: require('../../public/hammond_visual_media.jpg'),
          imageAlt: 'Hammond Visual Media website in development',
          link: null,
          content:
            'The front-end of this project is built with React and Javascript. It will use a MySQL database and include an image gallery and contact form. The backend will be built with Node and Express.'
        },
        {
          id: 4,
          title: 'Express Labs',
          imageSrc: require('../../public/express_labs.jpg'),
          imageAlt: 'Express Labs website in development',
          link: null,
          content:
            'Until recently I worked remotely for Fragment Labs on a redesign of expresslabs.com. The frontend that I created was a fully responsive SPA built with Laravel, Vue and Vuex that will integrate with a Laravel backend. It used Axios to call the backend API and Bulma as the css framework. It included a registration form and an account dashboard for authorized users. As this is currently in development the site is not available to view yet but if you would like to see more let me know!'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.portfolio {
  padding: 3rem;
  background-color: $dark;
}
.card-group {
  display: flex;
  justify-content: space-around;
}
.image-link {
  :hover {
    opacity: 0.95;
  }
}
.column {
  margin-bottom: 2rem;
}
@media (max-width: 1025px) {
  .portfolio {
    padding: 1rem;
  }
  .column {
    margin-bottom: 0;
  }
}
</style>
