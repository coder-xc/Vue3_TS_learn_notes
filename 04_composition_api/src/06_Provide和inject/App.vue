<template>
  <div>
    <home />
    <button @click="increment">App +1</button>
    <h2>{{ counter }}</h2>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";

export default {
  components: { Home },
  setup() {
    const name = ref("xc");
    let counter = ref(100);

    provide("name", readonly(name));
    provide("counter", readonly(counter));

    const increment = () => counter.value++;
    return { increment, counter };
  }
};
</script>

<style scoped></style>
