<template>
    <div>
        <input v-model="keyword" />
        <transition-group
            name="xc"
            tag="ul"
            :css="false"
            @beforeEnter="beforeEnter"
            @enter="enter"
            @leave="leave"
        >
            <li v-for="(item, index) in showNames" :key="item" :data-index="index">{{ item }}</li>
        </transition-group>
    </div>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            names: ["abc", "cba", "nba", "xc", "lilei", "hmm", "kobe", "james"],
            keyword: ""
        };
    },
    computed: {
        showNames() {
            return this.names.filter(item => item.indexOf(this.keyword) !== -1);
        }
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                height: "1.5em",
                delay: el.dataset.index * 0.5,
                onComplete: done
            });
        },
        leave(el, done) {
            gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index * 0.5,
                onComplete: done
            });
        }
    }
};
</script>

<style>
/* .xc-enter-from,
.xc-leave-to {
    opacity: 0;
}

.xc-enter-active,
.xc-leave-active {
    transition: opacity 1s ease;
} */
</style>
