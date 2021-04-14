<template>
  <div class="employment-history">
    <div class="container">
      <div class="columns" v-for="position in positions" :key="position.company">
        <div class="column is-3-desktop is-offset-3-desktop">
            <span class="has-text-weight-semibold">{{ position.company }} - {{ position.location }}</span>
            <p class="is-italic">{{ position.dates }}</p>
        </div>

        <div class="column is-4-desktop">
          <p class="position-title">{{ position.title }}</p>
          <p>{{ position.summary }}</p>
        </div>
      </div>
      <div class="download-resume has-text-centered">
        <a href="./amanda_rush_resume.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Download Resume</a>
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
          summary: 'In this role I leverage PHP, Javascript and Bootstrap to create custom Wordpress themes for our clients which are fully functional and responsive.'
        },
        {
          title: 'FRONT-END WEB DEVELOPER',
          company: 'Fragment Labs',
          location: 'Raleigh, NC (Remote)',
          dates: 'Jan 2019 - Oct 2019',
          summary:
            'I worked on a redesign project creating a fully responsive frontend SPA built with Laravel, Vue and Vuex that integrated with a Laravel backend. It used Axios to call the backend API and Bulma as the css framework. It included a registration form, token based authentication and an account dashboard for authorized users.'
        },
        {
          title: 'FREELANCE WEB DEVELOPER',
          company: 'Freelance',
          location: '(Remote)',
          dates: 'Jul 2017 - Feb 2019',
          summary: 'I created and maintained fully responsive websites using PHP, Vue, Laravel and Javascript, along with Bootstrap and MySQL.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main';

.employment-history {
  padding: 0 2rem;
}

.position-title {
 color: $pink;
}

.download-resume {
  margin-top: 3rem;
}
</style>
