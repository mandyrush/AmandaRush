<template>
    <div class="footer-links">
        <span>
            <a href="https://github.com/mandyrush" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </span>

        <span>
            <a href="https://linkedin.com/in/amanda-rush" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
        </span>

        <span>
            <a href="mailto:mandyrush85@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/main.scss';

    .footer-links {
        display: flex;
        justify-content: space-around;
        padding: 0 30%;
        width: 100%;
        span {
            font-size: 2.5rem;
            a {
                color: $main-font-color;
            }
        }
    }

    @media (max-width: 1024px) {
        .footer-links {
            padding: 0 15%;
            span {
                font-size: 2rem;
            }
        }
    }
</style>