<template>
  <div class="modal-overlay">
    <div class="modal">
      <h2>Detalles de la Orden</h2>
      <p>Total: {{ order.totalCost }}</p>
      <p>Cliente: {{ order.customer.name }} ({{ order.customer.phone }})</p>
      <ul class="order-items-list">
        <li v-for="item in order.orderItems" :key="item.id" class="order-item">
          <div>{{ item.productName }}</div>
          <div>{{ item.productDescription }}</div>
          <div>Cantidad: {{ item.quantity }}</div>
          <hr class="separator" />
        </li>
      </ul>
      <button @click="$emit('close')">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
}
.order-items-list {
  list-style: none;
  padding: 0;
}
.order-item {
  padding-bottom: 10px;
}
.separator {
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}
</style>
