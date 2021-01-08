<template>
    <div id="home" class="h-screen bg-primary-light bg-img flex justify-center">
        <div class="my-auto">
            <h1 class="font-bold text-6xl">
                <span class="text-primary-dark block lg:inline-block text-right"
                    >Uroš</span
                >
                <span class="text-gray-200">Mahne</span>
            </h1>
            <vue-typed-js
                :strings="['Programmer', 'Web Developer']"
                :startDelay="2000"
                :loop="true"
                :backSpeed="50"
                :typeSpeed="120"
            >
                <p class="text-xl ml-auto mt-4 font-semibold text-white">
                    I am
                    <span class="typing text-primary-dark"></span>
                </p>
            </vue-typed-js>
        </div>
    </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'
export default {
    components: {
        VueTypedJs,
    },
}
</script>

<style lang="scss">
.bg-img {
    background-image: url('../assets/farzad-nazifi-unsplash.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    background-blend-mode: soft-light;
}
</style>
