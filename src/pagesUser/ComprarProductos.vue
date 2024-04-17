<template>
    <NavbarCliente/>

  <div>
    <div class="container">
      <div class="product-list">
        <div v-for="(product) in products" :key="product.id" class="product-card">
          <img :src="product.urlProductImage" alt="Product Image">
          <h3>{{ product.productName }}</h3>
          <p>{{ product.productDescription }}</p>
          <p>Precio: {{ product.price }}</p>
          <button @click="addToCart(product)">Agregar al carrito</button>
        </div>
      </div>
      <div class="sidebar"></div>
    </div>
    <div class="pagination">
      <button @click="loadPreviousPage" :disabled="pageNumber === 1">Anterior</button>
      <span>Página {{ pageNumber }} de {{ totalPages -1}}</span>
      <button @click="loadNextPage" :disabled="pageNumber === totalPages">Siguiente</button>
    </div>
  </div>
</template>

<script>
import NavbarCliente from '@/components/NavbarCliente.vue';
import axios from 'axios';

export default {
  components: { NavbarCliente },

  data() {
    return {
      products: [],
      pageNumber: 1,
      totalPages: 0
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(`/customer/products?page=${this.pageNumber}&size=8`);
        this.products = response.data.content;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    loadNextPage() {
      if (this.pageNumber < this.totalPages) {
        this.pageNumber++;
        this.fetchProducts();
      }
    },
    loadPreviousPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
        this.fetchProducts();
      }
    },
    //addToCart(product) {
      // Lógica para agregar el producto al carrito
    //}
  }
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 30px;
}

.product-list {
  width: 1000px; /* Ancho máximo de las tarjetas de producto */
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  width: calc(25% - 10px);
  padding: 10px;
  margin: 0 5px 20px 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  height: 250px;
}

.sidebar {
  flex: 1;
  background-color: #ccc;
  height: 600px;
  width: 30px;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  margin-right: 10px;
}
</style>
