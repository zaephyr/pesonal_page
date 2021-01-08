<template>
    <div
        id="contact"
        class="min-h-screen md:min-h-full bg-primary-light bg-opacity-20 sm:px-8 lg:p-20 py-20"
    >
        <div class="p-8 text-gray-600">
            <h1 class="pb-4">Get in Touch</h1>
            <p>Feel free to contact me anytime</p>
        </div>

        <form
            v-if="submitStatus !== 'OK'"
            class="flex flex-col p-6 lg:w-3/4 2xl:w-1/2 mx-auto"
            @submit.prevent="submitForm"
        >
            <div class="relative">
                <input
                    :class="{
                        'shadow-lg': focusedElement === 'name',
                        'ring-2 ring-red-400': $v.name.$error,
                    }"
                    type="text"
                    v-model.trim.lazy="$v.name.$model"
                    placeholder="Name"
                    @change="setName($event.target.value)"
                    @focus="focusedElement = 'name'"
                    @blur="focusedElement = ''"
                />
                <span v-if="$v.name.$error" class="error-msg"
                    >Please type a valid name</span
                >
            </div>
            <div class="relative">
                <input
                    type="text"
                    v-model.trim.lazy="$v.email.$model"
                    placeholder="E-mail"
                    :class="{
                        'shadow-lg': focusedElement === 'email',
                        'ring-2 ring-red-400': $v.email.$error,
                    }"
                    @change="setEmail($event.target.value)"
                    @focus="focusedElement = 'email'"
                    @blur="focusedElement = ''"
                />

                <span v-if="$v.email.$error" class="error-msg"
                    >Please insert a valid e-mail</span
                >
            </div>
            <div class="relative">
                <input
                    type="text"
                    v-model.trim.lazy="$v.subject.$model"
                    placeholder="Subject"
                    :class="{
                        'shadow-lg': focusedElement === 'subject',
                        'ring-2 ring-red-400': $v.subject.$error,
                    }"
                    @change="setSubject($event.target.value)"
                    @focus="focusedElement = 'subject'"
                    @blur="focusedElement = ''"
                />
                <span v-if="$v.subject.$error" class="error-msg"
                    >Subject is required</span
                >
            </div>

            <div class="relative">
                <textarea
                    name="message"
                    id="msg"
                    rows="5"
                    class="p-2 m-4 outline-none w-full"
                    v-model.trim.lazy="$v.message.$model"
                    placeholder="Message"
                    :class="{
                        'shadow-lg': focusedElement === 'message',
                        'ring-2 ring-red-400': $v.message.$error,
                    }"
                    @change="setMessage($event.target.value)"
                    @focus="focusedElement = 'message'"
                    @blur="focusedElement = ''"
                >
                </textarea>
                <span v-if="$v.message.$error" class="error-msg"
                    >Please provide a valid message with at least
                    {{ $v.message.$params.minLength.min }} characters</span
                >
            </div>

            <div></div>
            <ButtonBubble
                class="mx-auto mt-4"
                :disabled="submitStatus === 'PENDING'"
                :text="'Submit'"
                type="submit"
                @click.native="submitForm"
            />

            <p
                v-if="submitStatus === 'ERROR'"
                class="text-2xl mx-auto text-red-400"
            >
                {{ error }}
            </p>
            <p
                v-else-if="submitStatus === 'PENDING'"
                class="text-2xl mx-auto text-primary-dark"
            >
                Sending...
            </p>
        </form>

        <div v-if="submitStatus === 'OK'" class="text-2xl my-20 ml-10">
            Thanks for your interest!
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate/src/index'
import { email, minLength, required } from 'vuelidate/src/validators'
import ButtonBubble from './ButtonBubble.vue'

export default {
    components: { ButtonBubble },
    mixins: [validationMixin],
    data() {
        return {
            focusedElement: '',
            submitStatus: null,
            error: 'Error!',
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(3),
        },
        email: {
            required,
            email,
        },
        subject: {
            required,
        },
        message: {
            required,
            minLength: minLength(25),
        },
    },
    methods: {
        setName(value) {
            this.name = value
            this.$v.name.$touch
        },
        setEmail(value) {
            this.email = value
            this.$v.email.$touch
        },
        setSubject(value) {
            this.subject = value
            this.$v.subject.$touch
        },
        setMessage(value) {
            this.message = value
            this.$v.message.$touch
        },
        async submitForm() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
                this.error = this.$v.error
            } else {
                try {
                    await this.$axios.$post(
                        `/.netlify/functions/contact-mail`,
                        {
                            name: this.name,
                            email: this.email,
                            subject: this.subject,
                            message: this.message,
                        }
                    )

                    this.submitStatus = 'PENDING'

                    setTimeout(() => {
                        this.submitStatus = 'OK'
                    }, 1000)
                } catch (error) {
                    this.submitStatus = 'ERROR'
                    this.error = error
                    console.log(error)
                }
            }
        },
    },
}
</script>

<style scoped>
.error-msg {
    @apply absolute -bottom-2 left-2 text-sm self-start ml-2 text-red-400;
}
input {
    @apply p-2 m-4 outline-none w-full;
}
</style>
