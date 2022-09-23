<template>
  <input
    type="text"
    class="input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    @keyup.enter="$emit('onEnter')"
  />
</template>

<script setup>
defineProps(["modelValue", "placeholder"]);
defineEmits(["update:modelValue", "onEnter"]);
</script>

<style scoped>
.input {
  padding: 10px 6px;
  outline: none;
  border-radius: 4px;
}
</style>
