<template>
    <aside class="menu">
        <ul class="menu-list">
            <li class="about-me" @click="changeTitle('About')">
                <router-link :to="{ name: 'about-me' }">About Me</router-link>
            </li>

            <li class="portfolio" @click="changeTitle('Portfolio')">
                <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
            </li>

            <li class="contact-me" @click="changeTitle('Contact')">
                <router-link :to="{ name: 'contact-me' }">Contact Me</router-link>
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
    .menu-list {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        li {
            list-style: none;
            flex-grow: 1;
            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                height: 100%;
                &:hover {
                    background-color: orange;
                }
            }
        }
        .about-me {
            background-color: rebeccapurple;
        }
        .portfolio {
            background-color: #9966cc;
        }
        .contact-me {
            background-color: #be9fdf;
        }
    }
</style>