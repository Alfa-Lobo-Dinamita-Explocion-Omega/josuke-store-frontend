<template>
    <div class="order-card" @click="handleClick">
      <p>Total: {{ order.totalCost }}</p>
      <p>Cliente: {{ order.customer.name }} ({{ order.customer.phone }})</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.$emit('open-modal', this.order);
      }
    }
  };
  </script>
  
  <style scoped>
  .order-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  </style>
  