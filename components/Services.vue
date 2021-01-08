<template>
    <div
        id="skills"
        class="min-h-screen bg-primary-light bg-opacity-20 flex flex-wrap justify-around items-center lg:px-20"
    >
        <div class="service-card">
            <div class="p-4 mt-2 mx-auto">
                <fa-icon
                    :icon="['fab', 'css3-alt']"
                    class="text-5xl text-icon-css"
                />
                <fa-icon
                    :icon="['fab', 'html5']"
                    class="text-5xl text-icon-html"
                />
            </div>
            <div class="card-text">
                I use HTML and CSS to build attractive and responsive frontends
                for websites.
            </div>
        </div>
        <div class="service-card">
            <div class="p-4 mt-2 mx-auto">
                <fa-icon
                    :icon="['fab', 'js-square']"
                    class="text-5xl text-icon-js"
                />
                <fa-icon
                    :icon="['fab', 'vuejs']"
                    class="text-5xl text-icon-vue"
                />
            </div>
            <div class="card-text">
                When a site needs to be more dynamic i like to use JavaScript
                and it's framework Vue.js.
            </div>
        </div>
        <div class="service-card">
            <div class="mt-3 mx-auto">
                <img src="~/assets/node-js.svg" alt="node" class="w-20" />
            </div>
            <div class="card-text">
                For backend i have some experience with Node.js and its
                framework Express.js
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.service-card {
    @apply bg-white h-72 w-56 shadow-xl m-6 rounded-xl flex flex-col transition-all duration-300;
}

.card-text {
    @apply p-6 mx-auto text-primary-dark font-semibold opacity-70;
}
</style>
