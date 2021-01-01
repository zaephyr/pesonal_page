<template>
    <div
        id="contact"
        class="min-h-screen md:min-h-full bg-primary-light bg-opacity-20 sm:px-8 lg:p-20 py-20"
    >
        <div class="p-8 text-gray-600">
            <h1 class="pb-4">Get in Touch</h1>
            <p>Feel free to contact me anytime</p>
        </div>
        <div>
            <form action="" class="flex flex-col p-6 lg:w-3/4 2xl:w-1/2">
                <div class="flex flex-col lg:flex-row">
                    <input type="text" v-model="name" placeholder="Name" />
                    <input type="text" v-model="email" placeholder="E-mail" />
                </div>

                <input type="text" v-model="subject" placeholder="Subject" />
                <textarea
                    name="message"
                    id="msg"
                    rows="5"
                    class="p-2 m-4"
                    v-model="message"
                    placeholder="Message"
                ></textarea>
                <button class="btn mx-auto mt-4">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    },
}
</script>

<style scoped>
input {
    @apply p-2 m-4;
}
</style>
