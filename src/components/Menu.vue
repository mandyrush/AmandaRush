<template>
    <aside class="menu">
        <ul class="menu-list">
            <li class="about-me" @click="changeTitle('About')">
                <router-link :to="{ name: 'about-me' }">About Me</router-link>
            </li>

            <li class="contact-me" @click="changeTitle('Skills')">
                <router-link :to="{ name: 'skills' }">Skills</router-link>
            </li>

            <li class="portfolio" @click="changeTitle('Portfolio')">
                <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        methods: {
            changeTitle(title) {
                this.$emit('changeTitle', title);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .menu {
        margin-bottom: 3rem;
    }
    .menu-list {
        height: 100%;
        margin: 0;
        display: flex;
        li {
            list-style: none;
            flex-grow: 1;
            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.25rem;
                height: 100%;
                &:hover {
                    background-color: #cccccc;
                    color: white;
                }
            }
        }
        .about-me {
            background-color: #AC3B61;
            a:hover {
                background-color: #be416b;
            }
        }
        .contact-me {
            background-color: #123C69;
            a:hover {
                background-color: #154b84;
            }
        }
        .portfolio {
            background-color: #9e9498;
            a:hover {
                background-color: #aaa1a5;
            }
        }
    }

    @media(max-width: 768px) {
        .menu-list li a {
            font-size: 1rem;
        }
    }
</style>