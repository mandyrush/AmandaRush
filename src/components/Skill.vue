<template>
  <div class="box content">
    <h4 class="skill-title">{{ skillSet.title }}</h4>
    <ul v-for="skill in skillSet.skills" :key="skill.name">
      <li class="skill columns">
        <span class="skill-name column is-6-desktop is-5-mobile">{{
          skill.name
        }}</span>
        <div class="skill-bubbles column is-6-desktop is-7-mobile">
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
@import '../assets/sass/main.scss';
.box {
  height: 100%;
  background-color: $dark;
}
.box h4 {
  color: $pink;
}
.skill {
  display: flex;
  align-items: center;
}
.skill-name {
  padding-right: 1rem;
  color: $green;
  font-size: 1.2rem;
  font-weight: bold;
}
.bubble-number {
  display: flex;
  li {
    list-style: none;
    margin-right: 1rem;
    height: 15px;
    width: 15px;
  }
}
@media (max-width: 1025px) {
  .box ul {
    margin-left: 0;
  }
}
</style>
