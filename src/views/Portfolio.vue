<template>
  <div class="description">
    <div class="project columns is-desktop">
      <span class="image column is-7-desktop is-12-mobile">
        <img
          src="../../public/hammond_visual_media.jpg"
          alt="Hammond Visual Media website in development"
        />
      </span>

      <div class="column is-5-desktop is-12-mobile">
        <h1 class="coming-soon">Coming Soon!</h1>
        <span class="project-title">
          Hammond Visual Media - (In Development)
        </span>
        <p class="project-description">
          The front-end of this project is built with React and Javascript. It
          will use a MySQL database and include an image gallery and contact
          form. The backend will be a RESTFUL API built with Node and Express.
        </p>
      </div>
    </div>

    <div class="project columns is-desktop">
      <span class="image column is-7-desktop is-12-mobile">
        <img
          src="../../public/express_labs.jpg"
          alt="Express Labs website in development"
        />
      </span>

      <div class="column is-5-desktop is-12-mobile">
        <span class="project-title">
          Express Labs - (In Development)
        </span>

        <p class="project-description">
          Until recently I worked remotely for Fragment Labs on a redesign of
          expresslabs.com. The frontend that I created was a fully responsive
          SPA built with Laravel, Vue and Vuex that will integrate with a
          Laravel backend. It used Axios to call the backend API and Bulma as
          the css framework. It included a registration form and an account
          dashboard for authorized users. As this is currently in development
          the site is not available to view yet but if you would like to see
          more let me know!
        </p>
      </div>
    </div>

    <div class="project columns is-desktop">
      <a
        href="http://bluebowfashion.com/"
        target="_blank"
        class="image image-link column is-7-desktop is-12-mobile"
      >
        <img src="../../public/blue_bow.jpg" alt="bluebowfashion.com" />
      </a>

      <div class="column is-5-desktop is-12-mobile">
        <a
          href="http://bluebowfashion.com/"
          target="_blank"
          class="project-title link"
        >
          Blue Bow Fashion
        </a>

        <p class="project-description">
          This began as a Laravel project but as it progressed I refactored to
          include Vue and Javascript. It was also built to be fully responsive
          and includes a contact form with validation and Bulma as the css
          framework.
        </p>
      </div>
    </div>

    <div class="project columns is-desktop">
      <a
        href="http://catswander.com/"
        target="_blank"
        class="image image-link column is-7-desktop is-12-mobile"
      >
        <img src="../../public/cats_wander.jpg" alt="catswander.com" />
      </a>

      <div class="column is-5-desktop is-12-mobile">
        <a
          href="http://catswander.com/"
          target="_blank"
          class="project-title link"
        >
          Cats Wander
        </a>

        <p class="project-description">
          My husband and I were lucky enough to travel through Europe for a
          little over a year while he worked remotely and I learned as much as I
          could about PHP, Laravel, MYSQL and the beginnings of Javascript. When
          planning our trip we couldn't bear to part with our two furry friends
          so we decided to take them along. As you can imagine our adventures
          were not your typical travel experiences so I created this blog to
          document each step of the way. It was my very first project and there
          are plenty more stories to come...
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.project {
  div {
    padding-left: 2rem;
  }
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project:not(:last-child) {
  margin-bottom: 5rem;
}
.project-title {
  margin-bottom: 1rem;
  display: block;
  color: $primary-two-gradient1;
  font-weight: bold;
}
.link {
  &:hover {
    color: $primary-two;
  }
}
.image-link {
  :hover {
    opacity: 0.9;
  }
}
img {
  box-shadow: 3px 3px 10px $primary-three;
  display: block;
  height: auto;
  width: 100%;
}

.coming-soon {
  color: rgb(255, 102, 0);
}

@media (max-width: 768px) {
  .project div {
    padding-left: 0.75rem;
  }
  .image {
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
}
</style>
