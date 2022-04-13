<template>
  <div>
    <h2>hello</h2>
    <h2>{{ message }}</h2>

    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "哈哈哈"
  }
});

const emit = defineEmits(["increment"]);

const emitEvent = () => {
  emit("increment", "100000");
};
</script>

<style></style>
