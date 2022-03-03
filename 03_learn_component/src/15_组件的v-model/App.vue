<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <!-- <input
      type="text"
      :value="message"
      @input="message = $event.target.value"
    /> -->

    <!-- 组件上使用v-model -->
    <!-- <xc-input v-model="message"></xc-input> -->
    <!-- <xc-input
      :modelValue="message"
      @update:model-value="message = $event"
    ></xc-input> -->

    <!-- 绑定两个v-model -->
     <xc-input v-model="message" v-model:title="title"></xc-input>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import XcInput from "./XcInput.vue";

export default {
  components: {
    XcInput,
  },
  data() {
    return {
      message: "Hello World",
      title: "哈哈哈"
    };
  },
};
</script>

<style scoped>
</style>