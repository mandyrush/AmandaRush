<template>
  <div>
    <div v-for="bubble in bubbles" :key="bubble.id" class="skill-bubbles">
      <SkillBubble :colored="bubble.colored" :isVisible="bubble.isVisible" />
    </div>
  </div>
</template>

<script>
import SkillBubble from './SkillBubble'

export default {
  name: 'SkillBubbles',
  components: {
    SkillBubble
  },
  props: {
    level: {
      type: Number
    }
  },
  data() {
    return {
      bubbles: [
        { id: 1, colored: false, isVisible: true },
        { id: 2, colored: false, isVisible: true },
        { id: 3, colored: false, isVisible: true },
        { id: 4, colored: false, isVisible: true },
        { id: 5, colored: false, isVisible: true }
      ]
    }
  },
  methods: {
    colorBubble(i) {
      setTimeout(() => {
        if (i > 0) {
          if (this.level >= this.bubbles[this.bubbles.length - i].id) {
            this.bubbles[this.bubbles.length - i].colored = true
          }
          i--
          this.colorBubble(i)
        }
      }, 500)
    },
    signalColorBubbles() {
      let skills = document.querySelector('#skills')
      let skillsPosition = skills.offsetTop
      if (window.scrollY >= skillsPosition - 500) {
        this.colorBubble(5)
      } else {
        this.bubbles.forEach(bubble => {
          bubble.colored = false
        })
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.signalColorBubbles)
  }
}
</script>

<style lang="scss" scoped>
.skill-bubbles div {
  display: flex;
}
</style>
