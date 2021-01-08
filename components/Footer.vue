<template>
    <div
        class="bg-primary-light h-56 text-primary-dark flex flex-col justify-between lg:ml-44"
    >
        <div class="flex justify-evenly mt-12">
            <div class="text-center">
                <fa-icon
                    :icon="['fas', 'city']"
                    class="text-5xl text-icon-primary-dark"
                />
                <p>Ljubljana, SI</p>
            </div>
            <div
                class="cursor-pointer text-center"
                v-clipboard="'uros.mahne@gmail.com'"
            >
                <fa-icon
                    :icon="['fas', 'paper-plane']"
                    class="text-5xl text-primary-dark"
                />
                <p>uros.mahne@gmail.com</p>
            </div>
        </div>
        <div class="flex justify-between mx-16 mb-2">
            <div class="flex">
                <div>
                    <fa-icon
                        :icon="['fab', 'linkedin']"
                        class="text-3xl text-icon-linkedIn mx-2"
                    />
                </div>
                <a href="https://github.com/zaephyr" target="_blank">
                    <fa-icon
                        :icon="['fab', 'github']"
                        class="text-3xl text-icon-gitHub"
                    />
                </a>
            </div>
            <div>&copy; {{ year }} Uroš Mahne</div>
        </div>
    </div>
</template>

<script>
export default {
    component: {
        Clipboard,
    },
    computed: {
        year() {
            let dt = new Date()
            let year = dt.getFullYear()
            return year
        },
    },
}
</script>
