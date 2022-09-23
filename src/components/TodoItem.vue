<template>
  <div class="todo-item">
    <span>{{ todo.content }}</span>
    <div class="right">
      <input
        type="checkbox"
        @change="onDoneToggle(todo.id, $event.target.checked)"
        :checked="todo.isDone"
      />
      <div class="remove" @click="$emit('onRemove', todo.id)">x</div>
    </div>
  </div>
</template>
<script setup>
defineProps(["todo", "onDoneToggle"]);
</script>
<style lang="scss" scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #95d9c3;
}

.right {
  display: flex;
  align-items: center;
}

.remove {
  margin-left: 10px;
  color: red;
  cursor: pointer;
}
</style>
