<template>
  <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
</template>

<script setup>
import { ref } from "vue";
const timestamp = Date.now()
</script>

<style scoped></style>
