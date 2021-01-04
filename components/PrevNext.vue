<template>
    <div class="flex justify-evenly md:text-xl xl:text-2xl">
        <NuxtLink
            v-if="prev"
            :to="{ name: 'projects-slug', params: { slug: prev.slug } }"
            class="font-bold hover:underline"
        >
            <fa-icon :icon="['fas', 'angle-double-left']" />

            <span :style="{ color: prev.color }"> {{ prev.title }}</span>
        </NuxtLink>
        <span v-else>&nbsp;</span>
        <NuxtLink
            to="/#portfolio"
            class="text-primary-dark text-2xl md:text-3xl md:border-b-2 hover:scale-110 border-primary-dark"
        >
            <fa-icon :icon="['fas', 'home']" />
        </NuxtLink>
        <NuxtLink
            v-if="next"
            :to="{ name: 'projects-slug', params: { slug: next.slug } }"
            class="font-bold hover:underline"
        >
            <span :style="{ color: next.color }">{{ next.title }}</span>
            <fa-icon :icon="['fas', 'angle-double-right']" />
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
