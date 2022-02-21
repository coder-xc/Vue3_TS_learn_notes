<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
import emitter from "./utils/eventbus";

export default {
  methods: {
    btnClick() {
      emitter.emit("xc", { name: "xc", age: 18 });
      emitter.emit("kobe", { name: "kobe", age: 30 });

   
    },
  },
};
</script>

<style scoped>
</style>