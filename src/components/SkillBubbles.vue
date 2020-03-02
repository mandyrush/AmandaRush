<template>
  <div>
    <transition-group
      appear
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <div
        v-for="bubble in bubbles"
        :key="bubble.id"
        class="skill-bubbles"
      >
        <SkillBubble :colored="bubble.colored" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import SkillBubble from './SkillBubble'
import Velocity from 'velocity-animate'

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
        { id: 1, colored: false },
        { id: 2, colored: false },
        { id: 3, colored: false },
        { id: 4, colored: false },
        { id: 5, colored: false }
      ]
    }
  },
  methods: {
    setBubbleColor() {
      //Iterate over the bubbles array
      for (let i = 0; i < this.bubbles.length; i++) {
        if (this.level >= this.bubbles[i].id) {
          this.bubbles[i].colored = true
        }
      }
    },
    beforeEnter: function(el) {
      el.style.opacity = 0.5;
      el.style.width = '0rem';
    },
    enter: function(el, done) {
      Velocity(
        el,
        { opacity: 1, width: '2rem' },
        { duration: 1000, easing: 'easeInOutBack', complete: done }
      )
    }
  },
  mounted() {
    this.setBubbleColor()
  }
}
</script>

<style lang="scss" scoped>
.skill-bubbles span {
  display: flex;
}
</style>
