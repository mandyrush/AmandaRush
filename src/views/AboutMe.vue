<template>
    <div class="description">
        <div ref="carousel" class="carousel">
            <div class="carousel-cell">
                <p>
                    <strong class="text-highlight">Greetings!</strong> My name is Amanda. I am a
                    front end web developer with a passion for technology, learning new things and building
                    cool stuff.
                </p><br>

                <p>
                    Currently I am working remotely for a company in North Carolina so I spend my days writing
                    code, sipping coffee and bending to the will of my three furry cats. A few years ago I found
                    myself looking for a career change so I decided to give programming a try and I’ve been
                    hooked ever since.
                </p>
            </div>

            <div class="carousel-cell">
                <p>
                    I've spent a little bit of time exploring PHP, Laravel and MYSQL, but most recently I have
                    been digging deep into Javascript and Vue.js. I have completed projects using both languages
                    and frameworks and I am currently working on the front end of a project built with Vue.js.
                </p><br>

                <p>
                    In my spare time I love to travel with my husband and fellow developer Des, spend time with
                    my family or try out some new recipes.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Flickity from 'flickity';
    import 'flickity/dist/flickity.min.css';

    export default {
        data() {
            return {
                flickityOptions: {
                    cellAlign: 'left',
                    contain: true,
                    wrapAround: true
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                const flkty = new Flickity(this.$refs.carousel, this.flickityOptions);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .carousel {
        height: 100%;
    }
    .carousel-cell {
        width: 100%;
        height: 100%;
        padding: 1rem 3.5rem;
    }
</style>