<template>
  <TransitionGroup name="todos">
    <div class="todo-items" v-for="todo in todos" :key="todo.id">
      <TodoItem
        :todo="todo"
        @on-remove="removeTodo"
        :onDoneToggle="onDoneToggle"
      />
    </div>
  </TransitionGroup>
</template>
<script setup>
import TodoItem from "@components/TodoItem.vue";

defineProps({ todos: Array, removeTodo: Function, onDoneToggle: Function });
</script>
<style scoped>
.todo-items {
  display: flex;
  flex-direction: column;
}

.todos-enter-active,
.todos-leave-active {
  transition: all 0.2s ease;
}
.todos-enter-from,
.todos-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
