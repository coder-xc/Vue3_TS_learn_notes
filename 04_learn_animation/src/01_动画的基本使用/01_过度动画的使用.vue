<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="xc">
            <h2 v-if="isShow">Hello World</h2>
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

<style scoped>
.xc-enter-from,
.xc-leave-to {
    opacity: 0;
}

.xc-enter-to,
.xc-leave-from {
    opacity: 1;
}

.xc-enter-active, 
.xc-leave-active {
    transition: opacity 2s ease;
}
</style>
