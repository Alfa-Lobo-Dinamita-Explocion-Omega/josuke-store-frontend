<template>
  <div>
    <div v-for="(product) in products" :key="product.id" class="product-card">
      <img :src="product.urlProductImage" alt="Product Image">
      <h3>{{ product.productName }}</h3>
      <p>{{ product.productDescription }}</p>
      <p>Precio: {{ product.price }}</p>
      <button @click="addToCart(product)">Agregar al carrito</button>
    </div>
    <div class="pagination">
      <button @click="loadPreviousPage" :disabled="pageNumber === 0">Anterior</button>
      <span>Página {{ pageNumber }} de {{ totalPages }}</span>
      <button @click="loadNextPage" :disabled="pageNumber === totalPages">Siguiente</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  
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
/* Estilos para los productos */
.product-card {
  width: calc(50% - 10px);
  padding: 10px;
  margin-bottom: 20px;
  float: left;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.product-card img {
  width: 100%;
  height: auto;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  margin-right: 10px;
}
</style>
