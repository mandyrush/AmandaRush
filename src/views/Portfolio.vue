<template>
    <div class="description">

        <div class="project columns">
            <a
                href="http://catswander.com/"
                target="_blank"
                class="image-link image column is-7-desktop is-12-mobile"
            >
                <img src="/cats_wander.jpg" alt="catswander.com">
            </a>

            <div class="column is-5-desktop is-12-mobile">
                <a href="http://catswander.com/" target="_blank" class="project-title link">
                    Cats Wander
                </a>

                <p class="project-description">
                    My husband and I were lucky enough to travel through Europe for a little over a year while he worked
                    remotely and I learned as much as I could about PHP, Laravel, MYSQL and the beginnings of Javascript.
                    When planning our trip we couldn't bear to part with our two furry friends so we decided to take them
                    along. As you can imagine our adventures were not your typical travel experiences so I created this
                    to document each step of the way. It was my very first project and there are plenty more stories to come...
                </p>
            </div>
        </div>

        <div class="project columns">
            <a
                    href="http://bluebowfashion.com/"
                    target="_blank"
                    class="image-link image column is-7-desktop is-12-mobile"
            >
                <img src="/blue_bow.jpg" alt="bluebowfashion.com">
            </a>

            <div class="column is-5-desktop is-12-mobile">
                <a href="http://bluebowfashion.com/" target="_blank" class="project-title link">
                    Blue Bow Fashion
                </a>

                <p class="project-description">
                    I created this project for my mom. She is an amazing and talented seamstress in her spare time and I wanted
                    to give her a place to show off her work. It began as a Laravel project but as it progressed I refactored to
                    include Vue.js along with some Javascript. It was also built to be fully responsive and includes a contact
                    form with validation and Bulma.io as the css framework.
                </p>
            </div>
        </div>

        <div class="project columns">
            <span class="image column is-7-desktop is-12-mobile">
                <img src="/express_labs.jpg" alt="express labs">
            </span>

            <div class="column is-5-desktop is-12-mobile">
                <span class="project-title">
                    Express Labs - (Currently in Production)
                </span>

                <p class="project-description">
                    Currently I am working remotely for Fragment Labs on a redesign of expresslabs.com. The frontend that I am creating is
                    an SPA built with Laravel, Vue.js and Vuex that will integrate with a Laravel backend. It uses axios to call the backend API
                    and Bulma.io as the css framework. It includes a registration form and an account dashboard for authorized users. As
                    this is currently in production the site is not available to view yet but if you would like to see more let me know!
                </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
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
        color: #2170c4;
        font-weight: bold;
    }
    .link {
        &:hover {
            color: #123C69;
        }
    }
    .image-link {
        :hover {
            opacity: .9;
        }
    }
    img {
        box-shadow: 3px 3px 10px #9e9498;
        display: block;
        height: auto;
        width: 100%;
    }

    @media (max-width: 768px) {
        .project div {
            padding-left: .75rem;
        }
        .image {
            margin-bottom: 1rem;
            padding: 0 .5rem;
        }
    }
</style>
