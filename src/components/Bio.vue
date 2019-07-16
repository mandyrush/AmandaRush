<template>
    <div class="bio">
        <div class="bio-content">

            <div class="about content">
                <div class="tab">
                    <h4>ABOUT</h4>
                </div>

                <div class="description">
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices laoreet lacus, eu condimentum erat sodales id. Nunc dolor mi, laoreet vitae finibus sit amet, faucibus consectetur nisl. In vitae ligula et elit elementum auctor et sed tortor. Proin commodo bibendum lectus, eu sodales arcu. In dignissim, risus eget cursus faucibus, ante nibh dictum neque, et pulvinar mi felis vitae neque. ante nibh dictum neque, et pulvinar mi felis vitae neque.
                    </span>
                </div>
            </div>

<!--            <div class="my-work content">-->
<!--                <div class="tab">-->
<!--                    <h4>My Work</h4>-->
<!--                </div>-->

<!--                <div class="description">-->
<!--                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices laoreet lacus, eu condimentum erat sodales id. Nunc dolor mi, laoreet vitae finibus sit amet, faucibus consectetur nisl. In vitae ligula et elit elementum auctor et sed tortor. Proin commodo bibendum lectus, eu sodales arcu. In dignissim, risus eget cursus faucibus, ante nibh dictum neque, et pulvinar mi felis vitae neque.</span>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="contact-me content">-->
<!--                <div class="tab">-->
<!--                    <h4>Contact Me!</h4>-->
<!--                </div>-->

<!--                <div class="description">-->
<!--                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices laoreet lacus, eu condimentum erat sodales id. Nunc dolor mi, laoreet vitae finibus sit amet, faucibus consectetur nisl. In vitae ligula et elit elementum auctor et sed tortor. Proin commodo bibendum lectus, eu sodales arcu. In dignissim, risus eget cursus faucibus, ante nibh dictum neque, et pulvinar mi felis vitae neque.</span>-->
<!--                </div>-->
<!--            </div>-->

            <div class="contact-info">
                <span><i class="fab fa-github"></i></span>
                <span><i class="fab fa-linkedin"></i></span>
                <span><i class="fas fa-envelope"></i></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bio {
        width: 100%;
        display: flex;
        align-items: flex-start;
    }
    .bio-content {
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .content {
        display: grid;
        grid-template-columns: 15% 85%;
        height: auto;
        margin: 3rem 0;
        border: 2px solid rebeccapurple;
        padding: 1rem;
    }
    .tab {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #e6d9f2;
        h4 {
            display: block;
            letter-spacing: 2px;
            line-height: 24px;
            width: 100%;
            transform: rotateZ(90deg);
            margin: 0;
            text-align: center;
        }
    }
    .description {
        padding: 1rem;
        height: 100%;
    }
    .contact-info {
        display: flex;
        justify-content: center;
        width: 100%;
        span {
            padding-right: 2rem;
            font-size: 2rem;
            color: #333333;
        }
    }

    @media (max-width: 800px) {
        .bio-content {
            padding: 0;
        }
    }
</style>
