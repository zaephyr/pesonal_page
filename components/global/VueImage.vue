<template>
    <img :src="require(`~/assets${this.src}`)" :alt="alt" />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
    },
    methods: {
        imgSrc() {
            try {
                return require(`~/assets${this.src}`)
            } catch (error) {
                console.log(error)
                return null
            }
        },
    },
}
</script>
