<template>
  <div class="pagination">
    <div
      class="page"
      v-for="page in totalPages"
      :key="page"
      @click="$emit('onPaginate', page)"
      :class="{
        'active-page': page === currentPage,
      }"
    >
      {{ page }}
    </div>
  </div>
</template>
<script setup>
defineProps({ totalPages: Number, currentPage: Number });
</script>
<style scoped>
.pagination {
  display: flex;
  flex-direction: row;

  margin-top: 10px;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: 0 5px;
  border: 1px solid #000;
  cursor: pointer;
}

.active-page {
  border: 2px solid #95d9c3;
}
</style>
