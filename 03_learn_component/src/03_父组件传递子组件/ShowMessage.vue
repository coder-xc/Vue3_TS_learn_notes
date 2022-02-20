<template>
  <div>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  // props: ["title", "content"]
  inheritAttrs: false,
  props: {
    title: String,
    content: {
      type: String,
      required: true,
      default: "123",
    },
    counter: {
      type: Number,
    },
    info: {
        type: Object,
        default: {name: "why"}
    }
  },
};
</script>

<style scoped>
</style>