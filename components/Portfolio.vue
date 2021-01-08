<template>
    <div id="portfolio" class="min-h-screen flex flex-col">
        <div class="text-gray-600 p-8 lg:px-28">
            <a
                href="https://github.com/zaephyr"
                target="_blank"
                class="flex mb-4"
            >
                <h1>Portfolio</h1>
                <fa-icon
                    :icon="['fab', 'github']"
                    class="text-3xl text-icon-gitHub my-auto ml-4"
                />
            </a>

            <p>Showcasing some of my best work</p>
        </div>
        <div class="flex flex-wrap justify-evenly mb-8 flex-grow items-center">
            <div
                class="portfolio-card"
                v-for="(app, key) in portfolio"
                :key="key"
            >
                <div class="portfolio-card__side portfolio-card__side--front">
                    <div
                        class="portfolio-card__picture"
                        :style="app.cssImg"
                        :class="{ blend: app.blend }"
                    >
                        &nbsp;
                    </div>
                    <h4 class="portfolio-card__heading">
                        <span
                            class="protfolio-card__heading-span"
                            :style="app.cssGradient"
                        >
                            {{ app.title }}
                        </span>
                    </h4>
                    <div class="portfolio-card__details">
                        {{ app.description }}
                    </div>
                </div>
                <div
                    class="portfolio-card__side portfolio-card__side--back"
                    :style="app.cssGradient"
                >
                    <NuxtLink
                        :to="{ path: `/projects/${app.slug}` }"
                        class="btn text-white"
                    >
                        <fa-icon
                            :icon="['fas', 'info-circle']"
                            class="text-2xl"
                        />
                        <span>More Info</span>
                    </NuxtLink>
                    <a
                        class="btn text-white"
                        :href="app.linkLive"
                        target="_blank"
                    >
                        <fa-icon
                            :icon="['fas', 'external-link-alt']"
                            class="text-2xl"
                        />
                        <span>Live Site</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        let fpl = {
            color: { primary: '#38003c', secondary: '#00ff85' },
            img: '@/assets/fpl.webp',
        }
        let seeFi = {
            color: { primary: '#000', secondary: '#cc8ef6' },
            img: '@/assets/seeFi.jpg',
        }
        return {
            portfolio: {
                fpl: {
                    title: 'FPL app',
                    slug: 'fpl_app',
                    linkLive: 'https://immense-woodland-89360.herokuapp.com/',
                    linkGitHub: 'https://github.com/zaephyr/fpl_app',
                    description:
                        'App uses official Fantasy Premier League API to get new data and new type of the game',
                    cssImg: {
                        backgroundImage: `url(${require('@/assets/fpl.webp')})`,
                    },
                    cssGradient: {
                        backgroundImage: `linear-gradient(to right bottom, ${fpl.color.primary}, ${fpl.color.secondary})`,
                    },
                },
                seeFi: {
                    title: 'See-Fi',
                    slug: 'see_fi',
                    linkLive: 'https://zaephyr.github.io/wheres-waldo/',
                    linkGitHub: 'https://github.com/zaephyr/wheres-waldo',
                    description:
                        'Where Waldo style game where you try to find selected fictional character as fast as possible',
                    cssImg: {
                        backgroundImage: `url(${require('@/assets/seeFi.jpg')}), linear-gradient(to right bottom, ${
                            seeFi.color.primary
                        }, ${seeFi.color.secondary})`,
                    },
                    cssGradient: {
                        backgroundImage: `linear-gradient(to right bottom, ${seeFi.color.primary}, ${seeFi.color.secondary})`,
                    },
                },
            },
        }
    },
}
</script>

<style lang="scss">
$color-primary-dark: #0a3d62;
$color-primary-light: #82ccdd;
$color-beige: #f8c291;
$color-black: #000;
$color-white: #fff;

.portfolio-card {
    perspective: 50rem;
    position: relative;
    height: 22rem;
    width: 17rem;
    margin: 2rem;
    &__side {
        height: 22rem;
        transition: all 0.8s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 1.5rem 4rem rgba($color-black, 0.2);

        &--front {
            background-color: rgba($color-primary-light, 0.2);
        }

        &--back {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            transform: rotateY(180deg);
            background-color: $color-primary-dark;
        }
    }
    &:hover &__side--front {
        transform: rotateY(-180deg);
    }

    &:hover &__side--back {
        transform: rotateY(0deg);
    }

    &__picture {
        background-size: cover;
        height: 11rem;
        background-blend-mode: screen;

        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    &__heading {
        font-size: 2rem;
        font-weight: 400;
        text-align: right;
        color: $color-white;
        position: absolute;
        top: 8rem;
        right: 0.75rem;
        width: 75%;
    }

    &__heading-span {
        padding: 1rem 1.5rem;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
    }

    &__details {
        padding: 0.8rem;
        margin-top: 1rem;
        font-size: 1.2rem;
        color: $color-primary-dark;
    }

    @media only screen and (max-width: 56.25em), only screen and (hover: none) {
        height: auto;
        border-radius: 3px;
        background-color: $color-white;
        box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

        &__side {
            height: auto;
            position: relative;
            box-shadow: none;

            &--front {
                padding-bottom: 1rem;
            }
            &--back {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                margin-top: -1rem;

                height: 8rem;
                transform: rotateY(0deg);
                clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);

                span {
                    display: none;
                }
            }
        }

        &:hover &__side--front {
            transform: rotateY(0deg);
        }

        &__details {
            padding: 1 3rem;
        }
    }
}
</style>
