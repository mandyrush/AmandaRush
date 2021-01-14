<template>
  <div class="skills">
    <div class="columns is-multiline">
      <div
        v-for="skillSet in skillList"
        :key="skillSet.id"
        class="column is-6-desktop is-4-widescreen"
      >
        <Skill :skillSet="skillSet" />
      </div>
    </div>
  </div>
</template>

<script>
import Skill from './Skill'

export default {
  name: 'Skills',
  components: {
    Skill
  },
  data() {
    return {
      skillList: [
        {
          id: 1,
          title: 'HTML/CSS',
          skills: [
            { name: 'HTML5', level: 4 },
            { name: 'CSS3', level: 4 },
            { name: 'SASS/SCSS', level: 4 },
            { name: 'Bootstrap', level: 4 },
            { name: 'Bulma', level: 3 }
          ]
        },
        {
          id: 2,
          title: 'Javascript',
          skills: [
            { name: 'Vue', level: 4 },
            { name: 'Javascript | ES6', level: 3 },
            { name: 'Vuex', level: 2 },
            { name: 'Nuxt', level: 1 },
            { name: 'React', level: 1 }
          ]
        },
        {
          id: 3,
          title: 'PHP7',
          skills: [
            { name: 'PHP7', level: 3 },
            { name: 'Laravel', level: 2 }
          ]
        },
        {
          id: 4,
          title: 'Tools',
          skills: [
            { name: 'Git | Github', level: 4 },
            { name: 'Postman', level: 3 },
            { name: 'iterm/ Terminal', level: 3 },
            { name: 'Photoshop', level: 3 },
            { name: 'Illustrator', level: 1 }
          ]
        },
        {
          id: 5,
          title: 'Database',
          skills: [
            { name: 'MySQL', level: 2 },
          ]
        },
        {
          id: 6,
          title: 'Methodologies',
          skills: [
            { name: 'RWD', level: 4 },
            { name: 'MVC', level: 2 },
            { name: 'AJAX', level: 2 },
            { name: 'RESTFUL API', level: 2 }
          ]
        },
        {
          id: 7,
          title: 'CMS',
          skills: [
            { name: 'Wordpress', level: 4 }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  height: 100%;
  max-width: 1500px;
  margin-top: 3rem;
  margin-bottom: 0;
}

@media (max-width: 1025px) {
  .skills,
  .columns:last-child {
    margin: 0;
  }
}

@media (min-width: 1025px) {
  .skills {
    padding: 0 2rem;
  }
}
</style>
