<template>
  <div class="skills columns is-multiline">
    <div
      v-for="skillSet in skillList"
      :key="skillSet.id"
      class="column is-4-desktop is-12-mobile"
    >
      <Skill :skillSet="skillSet" />
    </div>
  </div>
</template>

<script>
import Skill from '../components/Skill'

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
            { name: 'Bulma', level: 4 },
            { name: 'Flexbox', level: 4 },
            { name: 'Bootstrap', level: 3 },
            { name: 'CSS Grid', level: 3 },
            { name: 'Canvas', level: 2 }
          ]
        },
        {
          id: 2,
          title: 'Javascript',
          skills: [
            { name: 'Vue', level: 4 },
            { name: 'Vuex', level: 4 },
            { name: 'Axios', level: 3 },
            { name: 'Javascript | ES6', level: 3 },
            { name: 'React', level: 3 },
            { name: 'NodeJS', level: 2 },
            { name: 'Express', level: 2 },
            { name: 'Redux', level: 2 }
          ]
        },
        {
          id: 3,
          title: 'PHP7',
          skills: [{ name: 'Laravel', level: 3 }, { name: 'PHP7', level: 2 }]
        },
        {
          id: 4,
          title: 'Tools',
          skills: [
            { name: 'Visual Studios', level: 4 },
            { name: 'PhpStorm', level: 4 },
            { name: 'Sublime', level: 4 },
            { name: 'Git | Github', level: 4 },
            { name: 'Postman', level: 3 },
            { name: 'iterm/ Terminal', level: 3 },
            { name: 'Photoshop', level: 2 }
          ]
        },
        {
          id: 5,
          title: 'Database',
          skills: [
            { name: 'MySQL', level: 2 },
            { name: 'Sequelize', level: 2 },
            { name: 'MongoDB', level: 2 },
            { name: 'Mongoose', level: 2 },
            { name: 'MongoDB Compass', level: 2 },
            { name: 'Sequel Pro', level: 2 },
            { name: 'MySQL Workbench', level: 2 }
          ]
        },
        {
          id: 6,
          title: 'Methodologies',
          skills: [
            { name: 'RWD', level: 3 },
            { name: 'MVC', level: 2 },
            { name: 'AJAX', level: 2 },
            { name: 'RESTFUL API', level: 2 }
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
}
.skills,
.columns:last-child {
  margin: 3rem;
}

@media (max-width: 1025px) {
  .skills,
  .columns:last-child {
    margin: 0;
  }
}
</style>
