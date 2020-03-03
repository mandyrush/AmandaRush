<template>
  <div :class="boxColor + ' box content'">
    <h4 class="skill-title">{{ skillSet.title }}</h4>
    <ul v-for="skill in skillSet.skills" :key="skill.name">
      <li class="skill columns">
        <span class="skill-name column is-6">{{ skill.name }}</span>
        <div class="skill-bubbles column is-6">
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
  },
  data() {
    return {
      boxColor: ''
    }
  },
  methods: {
    setSkillBoxColor() {
      switch (this.skillSet.id) {
        case 1:
          this.boxColor = 'boxColorOne'
          break
        case 2:
          this.boxColor = 'boxColorTwo'
          break
        case 3:
          this.boxColor = 'boxColorThree'
          break
        case 4:
          this.boxColor = 'boxColorFour'
          break
        case 5:
          this.boxColor = 'boxColorFive'
          break
        case 6:
          this.boxColor = 'boxColorSix'
          break
      }
    }
  },
  created() {
    this.setSkillBoxColor()
  }
}
</script>

<style lang="scss" scoped>
.boxColorOne {
}
.boxColorTwo {
}
.boxColorThree {
}
.boxColorFour {
}
.boxColorFive {
}
.boxColorSix {
}
.box {
  height: 100%;
  color: white;
  background-color: #2c292d;
}
.skill {
  display: flex;
  align-items: center;
}
.skill-title {
  color: #ea5c86;
}
.skill-name {
  padding-right: 1rem;
  color: #a9dc76;
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
</style>
