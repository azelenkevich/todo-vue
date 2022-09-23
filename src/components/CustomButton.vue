<template>
  <button class="button" @click="$emit('onClick')">{{ text }}</button>
</template>

<script setup>
defineProps(["text"]);
</script>

<style scoped>
.button {
  background-color: #fff;
  outline: none;
  border: 2px solid #95d9c3;
  border-radius: 4px;
  cursor: pointer;
}
</style>
