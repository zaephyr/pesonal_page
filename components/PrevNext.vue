<template>
    <div class="flex justify-evenly">
        <NuxtLink
            v-if="prev"
            :to="{ name: 'projects-slug', params: { slug: prev.slug } }"
            class="text-primary font-bold hover:underline"
        >
            {{ prev.title }}
        </NuxtLink>
        <span v-else>&nbsp;</span>
        <NuxtLink to="/#portfolio" class="btn text-primary-dark">
            <fa-icon :icon="['fas', 'home']" class="text-2xl" />
        </NuxtLink>
        <NuxtLink
            v-if="next"
            :to="{ name: 'projects-slug', params: { slug: next.slug } }"
            class="font-bold hover:underline"
        >
            {{ next.title }}
        </NuxtLink>
        <span v-else>&nbsp;</span>
    </div>
</template>

<script>
export default {
    props: {
        prev: {
            type: Object,
            default: () => null,
        },
        next: {
            type: Object,
            default: () => null,
        },
    },
}
</script>
