<template>
    <div class="">
        <prev-next :prev="prev" :next="next" />
        <nuxt-content
            :document="project"
            class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mt-16"
        />
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const project = await $content('projects', params.slug).fetch()

        const [prev, next] = await $content('projects')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()

        return { project, prev, next }
    },
}
</script>

<style></style>
