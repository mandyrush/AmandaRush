<template>
    <div class="description">
        <div ref="carousel" class="carousel">
            <div class="carousel-cell">
                <a href="http://bluebowfashion.com/" target="_blank">Blue Bow Fashion</a>
                <img src="/blue_bow.jpg" alt="bluebowfashion.com">
            </div>
            
            <div class="carousel-cell">
                <a href="http://catswander.com/" target="_blank">Cats Wander</a>
                <img src="/cats_wander.jpg" alt="catswander.com">
            </div>
            
            <div class="carousel-cell">
                <span>Express Labs - Still in production, ask me to see more!</span>
                <img src="/express_labs.jpg" alt="">
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
    .images {
        margin-top: 1rem;
    }
    img {
        border: 1px solid gray;
        margin-bottom: 1rem;
        display: block;
        height: 100%;
        width: auto;
    }
    .carousel {
        height: 100%;
    }
    .carousel-cell {
        width: 100%;
        height: 90%;
        padding-left: 5%;
        text-align: center;
    }
</style>
