<template>
  <div class="todo-container">
    <div class="input-container">
      <CustomInput
        v-model="store.inputValue"
        placeholder="Enter todo..."
        class="todo-input"
        @onEnter="store.addTodo"
      />
      <CustomButton @onClick="store.addTodo" text="Add" class="add-button" />
    </div>
    <div class="search">
      <CustomInput
        class="search-input"
        v-model="store.searchValue"
        placeholder="Search..."
      />
    </div>
    <TodoItems
      :todos="store.searchedAndPaginatedTodos"
      :removeTodo="store.removeTodo"
      :onDoneToggle="store.onDoneToggle"
    />
    <Pagination
      :currentPage="store.currentPage"
      :totalPages="store.totalPages"
      @onPaginate="store.setCurrentPage"
    />
  </div>
</template>

<script setup>
import { useTodoStore } from "../store/todoStore";
import CustomInput from "@components/CustomInput.vue";
import CustomButton from "@components/CustomButton.vue";
import Pagination from "@components/Pagination.vue";
import TodoItems from "@components/TodoItems.vue";

const store = useTodoStore();
</script>

<style scoped>
.todo-container {
  padding: 12px;
  max-width: 500px;
  width: 100%;
  border: 6px solid #95d9c3;
  border-radius: 10px;
}

.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.todo-input {
  width: 75%;
}

.add-button {
  width: 20%;
  padding: 10px 6px;
}

.search-input {
  width: 100%;
  padding: 10px 6px;
  margin-bottom: 10px;
  outline: none;
  border-radius: 4px;
}
</style>
