<template>
  <div class="about-me">
    <div class="parallax parallax-one"></div>

    <div class="solid-block-one content-section">
      <div>
        <h2 class="title is-2 is-centered">Between Code</h2>
        <p>
          "I am a self proclaimed writer, traveler, artist, herder of cats and
          of course web developer!
          <br />
          I spend my days sipping coffee, writing code and bending to the will
          of my three furry felines. In my spare time I love to go on adventures
          with my husband and fellow developer Des, try out a new climbing wall
          or grab a drink with friends."
        </p>
      </div>
    </div>

    <div class="parallax parallax-two"></div>

    <div class="solid-block-two content-section">
      <div>
        <h2 class="title is-2">Previous Experience</h2>
        <p>
          "I'm currently working on a few freelance projects and until recently
          I also worked remotely for a company in North Carolina on the frontend
          of a redesign. Now that my share of the project has come to
          completion, I am excited to explore new opportunities where I can
          continue to learn and grow."
        </p>
      </div>
    </div>

    <div class="parallax parallax-three"></div>

    <div class="solid-block-three content-section">
      <div>
        <h2 class="title is-2">Looking Forward</h2>
        <p>
          "I love to learn and make a point each day to set aside a little time
          dedicated to tackling new concepts. I welcome any challenges and look
          forward to beginning my next projects.
          <br />
          Please check out my links above and feel free to send me a message if
          you would like to talk more about my work. I'd love to hear from you!"
        </p>
        <div class="contact-btn">
          <ContactButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactButton from '../UI/ContactButton'

export default {
  components: {
    ContactButton
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.about-me {
  height: 100%;
}
.parallax {
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax-one {
  background-image: url('../../public/prague.jpg');
}
.parallax-two {
  background-image: url('../../public/croatia.jpg');
}
.parallax-three {
  background-image: url('../../public/burano.jpg');
}
.solid-block-one {
  min-height: 500px;
  background-color: $dark;
  color: $white;
  h2 {
    color: $blue;
    text-shadow: 1px 1px black;
  }
  p {
    text-shadow: 2px 2px black;
  }
}
.solid-block-two {
  min-height: 500px;
  background-color: $yellow;
  color: $dark;
  p,
  h2 {
    text-shadow: 0.5px 0.5px gray;
  }
}
.solid-block-three {
  min-height: 500px;
  background-color: $dark;
  color: $white;
  h2 {
    color: $green;
    text-shadow: 1px 1px black;
  }
  p {
    text-shadow: 2px 2px black;
  }
}
.content-section {
  padding: 1rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    font-family: 'Spartan', sans-serif;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
}
.contact-btn {
  margin-top: 2rem;
}
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
  .content-section {
    padding: 1rem;
    p {
      font-size: 1.5rem;
    }
  }
}
</style>
