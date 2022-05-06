<template>
  <div class="app">
    <teleport to="#xc">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world />
    </teleport>

    <teleport to="#xc">
      <span>呵呵呵呵呵</span>
    </teleport>
  </div>
</template>

<script setup>
import { getCurrentInstance,onMounted } from "vue";
import HelloWorld from "./HelloWorld.vue";

const instance= getCurrentInstance();
console.log(instance.appContext.config.globalProperties.$name); 
</script>

<style></style>
