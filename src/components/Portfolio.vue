<template>
  <div class="portfolio">
    <div class="card-group columns is-multiline is-gapless">
      <div
        v-for="card in cards"
        :key="card.id"
        class="column is-4-desktop is-6-tablet is-12-mobile"
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
import PortfolioCard from './PortfolioCard'

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
          title: 'Range',
          imageSrc: require('../../public/range.jpg'),
          imageAlt: 'range.net',
          link: 'https://www.range.net/'
        },
        {
          id: 2,
          title: 'Billings Symphony',
          imageSrc: require('../../public/billings_symphony.jpg'),
          imageAlt: 'billingssymphony.org',
          link: 'https://billingssymphony.org/'
        },
        {
          id: 3,
          title: 'Capstone Wealth Management',
          imageSrc: require('../../public/capstone_retire.jpg'),
          imageAlt: 'capstoneretire.com',
          link: 'https://www.capstoneretire.com/'
        },
        {
          id: 4,
          title: 'Profitable Ideas - Never Say Sell',
          imageSrc: require('../../public/profitable_ideas_neversaysell.jpg'),
          imageAlt: 'profitableideas.com/neversaysell',
          link: 'http://www.profitableideas.com/neversaysell/'
        },
        {
          id: 5,
          title: 'Raisin Contracting',
          imageSrc: require('../../public/raisin_contracting.jpg'),
          imageAlt: 'raisincontracting.com',
          link: 'http://raisincontracting.com/'
        },
        {
          id: 6,
          title: 'Oakland Companies',
          imageSrc: require('../../public/oakland_companies.jpg'),
          imageAlt: 'oaklandcompanies.com',
          link: 'https://www.oaklandcompanies.com/'
        },
        {
          id: 7,
          title: 'Bridges Education and Wellness Center',
          imageSrc: require('../../public/bridgesmt.jpg'),
          imageAlt: 'bridgesmt.org',
          link: 'https://www.bridgesmt.org/'
        },
        // {
        //   id: 8,
        //   title: 'Cats Wander',
        //   imageSrc: require('../../public/cats_wander.jpg'),
        //   imageAlt: 'catswander.com',
        //   link: 'http://catswander.com/'
        // },
        {
          id: 9,
          title: 'Blue Bow Fashion',
          imageSrc: require('../../public/blue_bow.jpg'),
          imageAlt: 'bluebowfashion.com',
          link: 'http://bluebowfashion.com/'
        },
        // {
        //   id: 10,
        //   title: 'Express Labs (Coming soon)',
        //   imageSrc: require('../../public/express_labs.jpg'),
        //   imageAlt: 'Express Labs website in development',
        //   link: null
        // },
        {
          id: 11,
          title: 'Mountain Wave Distilling',
          imageSrc: require('../../public/mountain_wave_distilling.jpg'),
          imageAlt: 'mountainwavedistilling.com',
          link: 'https://mountainwavedistilling.com/'
        },
        {
          id: 12,
          title: 'Verhaeghe Benefits',
          imageSrc: require('../../public/verhaeghe_benefits.jpg'),
          imageAlt: 'verhaeghebenefits.com',
          link: 'https://www.verhaeghebenefits.com/'
        },
        {
          id: 13,
          title: 'Copper Ridge West',
          imageSrc: require('../../public/copper_ridge_west.jpg'),
          imageAlt: 'copperridgewest.com',
          link: 'https://copperridgewest.com/'
        },
        {
          id: 14,
          title: 'Highland Meadows',
          imageSrc: require('../../public/highland_meadows_mt.jpg'),
          imageAlt: 'highlandmeadowsmt.com',
          link: 'https://highlandmeadowsmt.com/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main';
.portfolio {
  padding: 2rem 0 0 0;
  background-color: $pink;
  min-height: 100vh;
  width: 100%;
}
.card-group {
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: auto;
}
.column {
  margin-bottom: 2rem;
}
@media (max-width: 1025px) {
  .portfolio {
    //padding: 1rem;
  }
  .column {
    margin-bottom: 0;
  }
}
</style>
