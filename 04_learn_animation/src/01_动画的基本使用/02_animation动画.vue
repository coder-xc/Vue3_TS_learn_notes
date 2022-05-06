<template>
    <div class="app">
        <div><button @click="isShow = !isShow">显示/隐藏</button></div>
        <transition name="xc">
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
.app {
    width: 200px;
    margin: 0 auto;
}
.title {
    display: inline-block;
}

.xc-enter-active {
    animation: bounce 1s ease;
}

.xc-leave-active {
    animation: bounce 1s ease reverse;
}

@keyframes bounce {
    0% {
        transform: scale(0);
    }

    59% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>
