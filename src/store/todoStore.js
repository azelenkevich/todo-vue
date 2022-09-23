import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    currentPage: 1,
    inputValue: "",
    searchValue: "",
  }),
  actions: {
    addTodo() {
      if (!this.inputValue.trim()) return;

      this.todos.push({
        id: new Date().getTime(),
        content: this.inputValue,
        isDone: false,
        createdAt: new Date(),
      });

      this.inputValue = "";
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    onDoneToggle(id, checked) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: checked } : todo
      );
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
  getters: {
    searchedTodos(state) {
      return state.todos.filter((todo) =>
        todo.content.includes(state.searchValue)
      );
    },
    searchedAndPaginatedTodos(state) {
      return this.searchedTodos.slice(
        (state.currentPage - 1) * 5,
        (state.currentPage - 1) * 5 + 5
      );
    },
    totalPages() {
      return Math.ceil(this.searchedTodos.length / 5);
    },
  },
});
