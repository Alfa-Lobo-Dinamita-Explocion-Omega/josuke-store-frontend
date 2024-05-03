<template>
  <div>
    <NavbarCliente/>
    <div class="container">
      <div class="product-list">
        <div v-for="(product) in products" :key="product.id" class="product-card">
          <img :src="product.urlProductImage" alt="Product Image" class="product-image"> <!-- Añadida la clase 'product-image' -->
          <h3>{{ product.productName }}</h3>
          <p class="descripcion" >{{ product.productDescription }}</p>
          <p>Precio: {{ product.price }}</p>
          <button @click="addToCart(product)">Agregar al carrito</button>
        </div>
      </div>
      <div class="sidebar">
        <h2>Detalles de la compra</h2>
        <table>
          <thead>
            <tr>
              <th style="padding-left: 20px; padding-right: 150px;" >Producto</th>
              <th style="padding-right: 50px;">Precio</th>
              <th style="padding-right: 50px; text-align: center; ">Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="index">
              <td style="padding-left: 20px; text-align: left;" >{{ item.productName }}</td>
              <td  style="text-align: left;">{{ item.price }}</td>
              <td >{{ item.quantity }}</td>
              <td  style="text-align: left;">{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <div class="total">
          Total de la compra: {{ calculateTotal() }}
        </div>
      </div>
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
      pageNumber: 0,
      totalPages: 0,
      cart: [] // Agregamos un array para manejar el carrito
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
    addToCart(product) {
      // Verificamos si el producto ya está en el carrito
      const existingItemIndex = this.cart.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        // Si el producto ya está en el carrito, incrementamos la cantidad
        this.cart[existingItemIndex].quantity++;
      } else {
        // Si el producto no está en el carrito, lo agregamos con cantidad 1
        this.cart.push({
          id: product.id,
          productName: product.productName,
          price: product.price,
          quantity: 1
        });
      }
    },
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
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
  height: 450px;
}

.sidebar {
  flex: 1;
  background-color: #ccc;
  height: 600px;
}

.product-image {
  max-width: 100%; 
  max-height: 150px; 
}

.total {
  margin-top: 20px;
  font-weight: bold;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  margin-right: 10px;
}

.descripcion {
  text-align: justify;
}
</style>
