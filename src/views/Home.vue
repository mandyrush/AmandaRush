<template>
  <div class="page-content">
      <div class="portfolio-img">
          <img src="/amandaPic.jpg" alt="Image of Amanda">
      </div>

      <div class="header">
          <div class="header-content">
              <div class="title">About</div>
              <div class="name"><span>Amanda Rush</span></div>
          </div>

          <Bio/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bio from "@/components/Bio.vue";

export default {
  name: "home",
  components: {
        Bio
  }
};
</script>

<style lang="scss">
    body {
        margin: 0;
    }
    .page-content {
        height: 100vh;
        display: flex;
    }
    .portfolio-img {
        flex-basis: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3rem;
        img {
            width: 75%;
            height: auto;
        }
    }
    .header {
        flex-basis: 60%;
        height: 100%;
        display: grid;
        grid-template-rows: 35% 65%;
        .header-content {
            position: relative;
            height: 100%;
        }
    }
    .title {
        font-size: 15rem;
        color: #f2f2f2;
        position: absolute;
        height: 100%;
    }
    .name {
        font-size: 3rem;
        color: rebeccapurple;
        position: absolute;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }

    @media (max-width: 800px) {
        .page-content {
            flex-wrap: wrap;
            padding: 1rem;
        }
        .portfolio-img {
            flex-basis: 100%;
            padding: 0;
            justify-content: center;
        }
        .header {
            flex-basis: 100%;
            grid-template-rows: 20% 80%;
        }
        .title {
            font-size: 7rem;
        }
    }
</style>
