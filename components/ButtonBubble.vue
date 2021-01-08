<template>
    <div class="btn-bubble">
        {{ text }}
        <span></span><span></span><span></span><span></span>
    </div>
</template>

<script>
export default {
    props: ['text', 'icon'],
}
</script>

<style>
.btn-bubble {
    @apply p-4 rounded-xl ring ring-primary-light  text-primary-dark font-bold overflow-hidden relative cursor-pointer max-h-14;
}

.btn-bubble span {
    --c: #82ccdd;
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

.btn-bubble:hover span {
    transform: translateY(0) scale(2);
}

.btn-bubble span:nth-child(1) {
    --n: 1;
}

.btn-bubble span:nth-child(2) {
    --n: 2;
}

.btn-bubble span:nth-child(3) {
    --n: 3;
}

.btn-bubble span:nth-child(4) {
    --n: 4;
}
</style>
