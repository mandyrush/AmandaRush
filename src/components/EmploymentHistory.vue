<template>
  <div class="employment-history">
    <div class="columns" v-for="position in positions" :key="position.company">
      <div class="column is-3 is-offset-3">
          {{ position.company }} - {{ position.location }}
          <p>{{ position.dates }}</p>
      </div>

      <div class="column is-4">
        <p>{{ position.title }}</p>
        <p>{{ position.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positions: [
        {
          title: 'FRONT-END WEB DEVELOPER',
          company: 'AD Creative Group',
          location: 'Billings, MT',
          dates: 'Mar 2020 - Current',
          summary: ''
        },
        {
          title: 'FRONT-END WEB DEVELOPER',
          company: 'Fragment Labs',
          location: 'Raleigh, NC (Remote)',
          dates: 'Jan 2019 - Oct 2019',
          summary:
            'I worked on a redesign project creating a fully responsive frontend SPA built with Laravel, Vue and Vuex that integrates with a Laravel backend. It uses Axios to call the backend API and Bulma as the css framework. It includes a registration form, token based authentication and an account dashboard for authorized users.'
        },
        {
          title: 'FREELANCE WEB DEVELOPER',
          company: 'Self',
          location: '(Remote)',
          dates: 'Jul 2017 - Feb 2019',
          summary: 'I created and maintained catswander.com and bluebowfashion.com. Both sites were built with Laravel and PHP. Catswander.com also Includes Bootstrap and uses a MySQL database. It features a mosaic styled image gallery, blog posts, user registration and login as well as user comments. Bluebowfashion.com includes Vue along with some Javascript. It was also built to be fully responsive and includes a contact form with validation and Bulma as the css framework.'
        }
      ]
    }
  }
}
</script>
