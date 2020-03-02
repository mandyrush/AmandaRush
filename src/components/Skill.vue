<template>
  <div class="box content">
    <h4>{{ skillSet.title }}</h4>
    <ul v-for="skill in skillSet.skills" :key="skill.name">
      <li class="skill columns">
        <span class="skill-name column is-6">{{ skill.name }}</span>
        <div class="skill-bubbles column">
          <SkillBubbles :level="skill.level" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SkillBubbles from './SkillBubbles'

export default {
  name: 'Skill',
  components: {
    SkillBubbles
  },
  props: {
    skillSet: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
}
.skill {
  display: flex;
  align-items: center;
}
.skill-name {
  padding-right: 1rem;
}
</style>
