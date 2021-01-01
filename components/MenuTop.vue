<template>
    <div>
        <div class="h-20 bg-primary-light flex z-50 fixed w-full">
            <button
                class="hamburger hamburger--spring ml-4"
                :class="{ 'is-active': activeHamburger }"
                @click="toggleHamburger"
            >
                <span class="hamburger-box">
                    <span class="hamburger-inner bg-gray-200"></span>
                </span>
            </button>
        </div>
        <transition name="menu">
            <ul
                v-if="activeHamburger"
                class="bg-primary-light top-20 left-4 w-32 h-56 z-50 fixed li-menu"
            >
                <li><a v-scroll-to="'#home'">Home</a></li>
                <li><a v-scroll-to="'#about'">About</a></li>
                <li><a v-scroll-to="'#skills'">Services</a></li>
                <li><a v-scroll-to="'#portfolio'">Portfolio</a></li>
                <li><a v-scroll-to="'#contact'">Contact</a></li>
            </ul>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeHamburger: false,
        }
    },
    methods: {
        toggleHamburger() {
            this.activeHamburger = !this.activeHamburger
        },
    },
}
</script>

<style>
.menu-leave-active,
.menu-enter-active {
    z-index: 30;
    transition: all 0.7s ease-in-out;
}

.menu-leave-to,
.menu-enter {
    z-index: -5;

    font-size: 0;

    transform: translateY(-100%);
    transition: all 0.7s ease-in-out;
}
</style>
