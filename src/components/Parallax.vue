<template>
  <div class="parallax-container">
    <div class="solid-block-one content-section">
      <div class="content">
        <div class="resume-statement">
          <h3>I am a Front End Developer with 3+ years experience building and maintaining responsive mobile first websites. I am proficient in HTML, CSS, Javascript and Vue. </h3>
        </div>
      </div>
    </div>

    <div id="employment" class="solid-block-four content-section">
      <div class="content">
        <h2 class="title is-2">Experience</h2>
        <EmploymentHistory />
      </div>
    </div>

    <div class="parallax parallax-one">
      <div class="parallax-gradient"></div>
      <div class="img-text">
<!--        <h3>I am a front-end web developer with a passion for technology, learning and creating.</h3>-->
      </div>
    </div>

    <div id="skills" class="solid-block-two content-section">
      <div class="content">
        <h2 class="title is-2">Skills</h2>
        <Skills />
      </div>
    </div>

    <div class="parallax parallax-two">
      <div class="parallax-gradient"></div>
      <div class="img-text">
<!--        <h3>"I spend my days sipping coffee, writing code and bending to the will of my three furry felines."</h3>-->
      </div>
    </div>

    <div id="portfolio" class="solid-block-three content-section">
      <div class="content">
        <h2 class="title is-2">Portfolio</h2>
        <Portfolio />
      </div>
    </div>

    <div class="parallax parallax-three">
      <div class="parallax-gradient"></div>
      <div class="img-text">
<!--        <h3>"I love to learn and enjoy tackling new concepts."</h3>-->
      </div>
    </div>
  </div>
</template>

<script>
import EmploymentHistory from '@/components/EmploymentHistory'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'

export default {
  components: {
    EmploymentHistory,
    Portfolio,
    Skills
  },
  methods: {
    smoothScrollTo(scrollTo) {
      let el = document.querySelector(scrollTo)
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main';
.resume-statement {
  width: 100%;
  text-align: center;
  padding: 1rem 3rem;
  margin: auto;
  h3 {
    font-size: 1.85rem;
    color: $white;
  }
}

.parallax-container {
  height: 100%;
}
.parallax {
  position: relative;
  height: 500px;
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax-gradient {
  width: 100%;
  height:100%;
  background-color: rgba(0,0,0,0.5);
}
.parallax-one {
  background-image: url('../../public/prague_mobile.jpg');
}
.parallax-two {
  background-image: url('../../public/croatia_mobile.jpg');
}
.parallax-three {
  background-image: url('../../public/burano_mobile.jpg');
}
.img-text {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 1rem 3rem;
  h3 {
    font-size: 1.85rem;
    color: $white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  }
}
.solid-block-one {
  background-color: $blue;
  color: $white;
  h3 {
    color: $white;
  }
}
.solid-block-two {
  background-color: $blue;
  //border-top: 5px solid $white;
  //border-bottom: 5px solid $white;
  h2 {
    color: $white;
  }
}
.solid-block-three {
  background-color: $pink;
  h2 {
    color: $white;
  }
}
.solid-block-four {
  background-color: $white;
  color: $dark;
  h2 {
    color: $dark;
  }
}
.content-section {
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    max-width: 1500px;
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
    font-family: 'Spartan', sans-serif;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
}

.solid-block-one.content-section {
  padding: 3rem 0;
}

@media (max-width: 760px) {
  .parallax {
    background-attachment: scroll;
  }
}
@media (min-width: 768px) {
  .parallax-one {
    background-image: url('../../public/prague.jpg');
  }
  .parallax-two {
    background-image: url('../../public/croatia.jpg');
  }
  .parallax-three {
    background-image: url('../../public/burano.jpg');
  }
}
@media (max-width: 1200px) {
  .content-section {
    p {
      font-size: 1.5rem;
    }
  }
}

@media (min-width: 992px) {
  .resume-statement {
    width: 75%;
  }
  .img-text {
    width: 50%;
  }
}
</style>
