<template>
  <div>
    <input v-model="value" />
    <input v-model="xc" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    xc: {
      set(xc) {
        this.$emit("update:title", xc);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped>
</style>