<template>
    <div class="w-44 h-full bg-primary-light flex-col items-center flex fixed">
        <img
            src="~/assets/profilePic.jpg"
            alt="Profile Picture"
            class="rounded-full border-4 border-primary-dark w-28 h-28 mt-20 mirror"
        />
        <ul class="mt-10 li-menu">
            <li><a v-scroll-to="'#home'">Home</a></li>
            <li><a v-scroll-to="'#about'">About</a></li>
            <li><a v-scroll-to="'#skills'">Services</a></li>
            <li><a v-scroll-to="'#portfolio'">Portfolio</a></li>
            <li><a v-scroll-to="'#contact'">Contact</a></li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
