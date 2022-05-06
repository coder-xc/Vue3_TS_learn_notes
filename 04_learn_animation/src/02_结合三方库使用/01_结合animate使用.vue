<template>
    <div class="app">
        <div><button @click="isShow = !isShow">显示/隐藏</button></div>
        <transition
            enter-active-class="animate__animated animate__bounceInRight"
            leave-active-class="animate__animated animate__bounceInDown"
        >
            <h2 class="title" v-if="isShow">Hello World</h2>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        };
    }
};
</script>

<style>
.title {
    display: inline-block;
}

.animate__bounceInDown {
    animation-direction: reverse;
}

/* .xc-enter-active {
    animation: bounceInUp 1s ease;
}
.xc-leave-active {
    animation: bounceInUp 1s ease reverse;
} */
</style>
