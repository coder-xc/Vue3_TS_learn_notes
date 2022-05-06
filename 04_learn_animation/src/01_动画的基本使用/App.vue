<template>
    <div class="app">
        <div><button @click="isShow = !isShow">显示/隐藏</button></div>
        <transition name="xc" mode="out-in" appear>
            <component :is="isShow ? 'home' : 'about'"></component>
        </transition>
    </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

export default {
    components: {
        Home,
        About
    },
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

.xc-enter-from,
.xc-leave-to {
    opacity: 0;
}

.xc-enter-active,
.xc-leave-active {
    transition: opacity 1s ease;
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
