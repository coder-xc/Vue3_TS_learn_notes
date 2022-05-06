<template>
  <div>
    <button v-xc.aaa.bbb="'coderxc'" v-if="counter < 2" @click="increment">当前计数：{{ counter }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const vXc = {
  created(el, bindings, vnode, preVnode) {
    console.log("xc created",el, bindings, vnode, preVnode);
    console.log(bindings.modifiers);
    console.log(bindings.value);
  },
  beforeMount() {
    console.log("xc beforeMount");
  },
  mounted() {
    console.log("xc mounted");
  },
  beforeUpdate() {
    console.log("xc beforeUpdate");
  },
  updated() {
    console.log("xc updated");
  },
  beforeUnmount() {
    console.log("xc beforeUnmount");
  },
  unmounted() {
    console.log("xc unmounted");
  }
};

const counter = ref(0);
const increment = () => counter.value++;
</script>

<style scoped></style>
