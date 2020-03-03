<template>
  <article class="coming-soon content">
    <h4 class="title is-4">New Features Coming Soon!</h4>
    <div class="columns is-centered">
      <div class="column is-3 test">
        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Additional React Features</li>
        </ul>
      </div>

      <div class="column is-3 test">
        <ul>
          <li>Added Javascript Functionality</li>
          <li>Sequelize</li>
          <li>Mongoose</li>
        </ul>
      </div>
    </div>
    <div class="buttons is-centered">
      <button class="button is-primary is-inverted is-outlined">
        Request a Feature!
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.test {
  display: flex;
  justify-content: center;
}
.coming-soon {
  background-color: #78dce7;
  padding: 3rem;
}

.title {
  text-align: center;
}
</style>
