<template>
    <div class="h-screen md:px-8 lg:px-16 xl:px-32" id="about">
        <div class="h-1/5 p-8 text-gray-600 md:px-4 lg:px-8">
            <h1>About Me</h1>
            <p>get to know me</p>
        </div>
        <div class="h-4/5 flex px-8 md:px-2 lg:px-8">
            <div class="hidden md:block">
                <img
                    src="~/assets/profilePic.jpg"
                    alt="profilePic"
                    class="mirror"
                />
            </div>

            <div class="lg:px-6 md:pl-6 divide-y-2 divide-primary-light">
                <div class="text-gray-500 pb-6">
                    <h3 class="text-lg text-primary-light">Who am I?</h3>
                    <h2 class="text-xl font-bold">
                        I am Uroš Mahne, a Web Developer
                    </h2>
                    <p class="mt-4">
                        I am a freelancer based in Slovenia and I have been
                        building web apps for around a year. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Optio enim nisi
                        laboriosam unde libero, rerum quaerat magni ratione modi
                        consectetur?
                    </p>
                </div>
                <div class="pt-6">
                    <div class="flex">
                        <div class="w-1/2">
                            <span class="font-bold">Name:</span> Uroš Mahne
                        </div>
                        <div>
                            <span class="font-bold">Email:</span>
                            uros.mahne@gmail.com
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-1/2">
                            <span class="font-bold">Age:</span> {{ age }}
                        </div>
                        <div>
                            <span class="font-bold">From:</span>
                            Ljubljana, SI
                        </div>
                    </div>
                    <div class="mt-10 flex justify-evenly">
                        <button class="btn">Download CV</button>
                        <button class="btn" v-scroll-to="'#portfolio'">
                            My Work
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            born: 1984,
        }
    },
    computed: {
        age() {
            let dt = new Date()
            let year = dt.getFullYear()
            return year - this.born
        },
    },
}
</script>

<style></style>
