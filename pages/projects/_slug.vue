<template>
    <div class="text-gray-700 mt-8">
        <prev-next :prev="prev" :next="next" />
        <div class="flex justify-around mt-8 lg:w-1/2 lg:mx-auto">
            <a
                v-if="project.title != 'Portfolio website'"
                class="view"
                :href="project.live"
                target="_blank"
            >
                <fa-icon
                    :icon="['fas', 'external-link-alt']"
                    class="text-3xl"
                />
                <span class="font-bold my-auto">View Live Site </span></a
            >
            <a class="view" :href="project.github" target="_blank">
                <fa-icon :icon="['fab', 'github']" class="text-3xl" />
                <span class="font-bold my-auto">View on GitHub</span>
            </a>
        </div>

        <h1 class="text-gray-600 lg:text-5xl xl:text-7xl text-center mt-10">
            {{ project.title }}
        </h1>
        <nuxt-content
            :document="project"
            class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto my-16 px-4"
        />
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const project = await $content('projects', params.slug).fetch()

        const [prev, next] = await $content('projects')
            .only(['title', 'slug', 'color'])
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()

        return { project, prev, next }
    },
}
</script>

<style lang="scss">
.view {
    @apply bg-gray-700 text-gray-400 p-2 rounded-xl ml-2 flex text-center transition-all hover:bg-gray-600 hover:text-gray-300  duration-500;
}

.nuxt-content {
    img {
        @apply mx-auto;
    }

    a {
        @apply text-primary-light;
    }

    blockquote {
        @apply border-gray-300 bg-gray-100 py-1;
    }

    code {
        @apply text-primary-hover;
    }
}
</style>
