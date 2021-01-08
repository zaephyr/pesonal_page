<template>
    <div class="h-screen flex flex-col" id="about">
        <div class="text-gray-600 p-8 md:p-16 lg:px-28">
            <h1>About Me</h1>
            <p>get to know me</p>
        </div>
        <div
            class="flex flex-col flex-1 md:flex-row content-center items-center my-auto px-8 md:px-2 lg:px-8 xl:px-24"
        >
            <div class="block">
                <img
                    src="~/assets/profilePic.jpg"
                    alt="profilePic"
                    class="mirror w-2/3 md:w-auto object-cover"
                />
            </div>

            <div class="lg:px-6 md:pl-6 divide-y-2 divide-primary-light">
                <div class="text-gray-500 pb-6">
                    <h3 class="text-lg text-primary-light">Who am I?</h3>
                    <h2 class="text-xl font-bold">
                        I am Uroš Mahne, a Web Developer
                    </h2>
                    <p class="mt-4 lg:pb-6">
                        Ex online poker player of twelve years dipping its toes
                        into web development. I have been building web apps with
                        newsest technologies for around a year. Looking for new
                        challenges and problems to solve.
                    </p>
                </div>
                <div class="pt-6 lg:pt-12">
                    <div class="flex">
                        <div class="w-1/2">
                            <span class="font-bold">Name:</span> Uroš Mahne
                        </div>
                        <div>
                            <span class="font-bold">Email:</span>
                            uros.mahne@gmail.com
                        </div>
                    </div>
                    <div class="flex lg:pb-8">
                        <div class="w-1/2">
                            <span class="font-bold">Age:</span> {{ age }}
                        </div>
                        <div>
                            <span class="font-bold">From:</span>
                            Ljubljana, SI
                        </div>
                    </div>
                    <div class="mt-10 flex justify-evenly h-20">
                        <div>
                            <ButtonBubble
                                :text="'Download CV'"
                                :class="{ 'bg-primary-light': btnActive }"
                                @click.native="toggleBtn()"
                            />
                            <transition name="tab-fade">
                                <div
                                    v-if="btnActive"
                                    class="flex justify-around font-bold text-primary-dark"
                                >
                                    <a
                                        href="/Uros_Mahne-europass.pdf"
                                        download=""
                                        class="lang-tab"
                                        >EN</a
                                    >
                                    <a
                                        href="/Uros_Mahne-CV.pdf"
                                        download=""
                                        class="lang-tab"
                                        >SI</a
                                    >
                                </div>
                            </transition>
                        </div>

                        <ButtonBubble
                            :text="'My Work'"
                            v-scroll-to="'#portfolio'"
                        />
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
            btnActive: false,
        }
    },
    computed: {
        age() {
            let dt = new Date()
            let year = dt.getFullYear()
            const month = dt.getMonth()
            if (month < 5) {
                return year - this.born - 1
            } else {
                return year - this.born
            }
        },
    },
    methods: {
        toggleBtn() {
            this.btnActive = !this.btnActive
        },
    },
}
</script>

<style>
.lang-tab {
    @apply border-b-2 border-primary-light px-3 pt-4 hover:bg-primary-light hover:bg-opacity-20  cursor-pointer duration-500;
}

.tab-fade-enter-active {
    transition: all 0.3s ease;
}
.tab-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.tab-fade-enter, .tab-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
