<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import Home from "./Hoem.vue";
import { computed } from "vue";

export default {
  components: {
    Home,
  },
  provide() {
    return {
      name: "xc",
      age: 18,
      length: computed(() => this.names.length),
    };
  },
  data() {
    return {
      names: ["abc", "cba", "nba"],
    };
  },
  methods: {
    addName() {
      this.names.push("xc");
    },
  },
};
</script>

<style scoped>
</style>