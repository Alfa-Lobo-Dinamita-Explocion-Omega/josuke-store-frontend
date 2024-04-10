<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginationComponent',
    props: ['currentPage', 'totalPages'],
    methods: {
      prevPage() {
        this.$emit('pageChange', this.currentPage - 1);
      },
      nextPage() {
        this.$emit('pageChange', this.currentPage + 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    margin-top: 20px;
  }
  
  button {
    margin: 0 5px;
  }
  </style>
  