<template>
  <section class="subframe">
    <div>
      <NavbarCliente />
      <div class="container">
        <div class="product-list">
          <div v-for="(product) in products" :key="product.id" class="product-card">
            <img :src="product.urlProductImage" alt="Product Image" class="product-image">
            <!-- Añadida la clase 'product-image' -->
            <h3>{{ product.productName }}</h3>
            <p class="descripcion">{{ product.productDescription }}</p>
            <p>Precio: {{ product.price }}</p>
            <button class="bluebutton" @click="addToCart(product)">Agregar al carrito</button>
          </div>
          <div class="pagination">
            <button class="bluebutton" @click="loadPreviousPage" :disabled="pageNumber === 1">Anterior</button>
            <span style="color: #dcdbdb;">Página {{ pageNumber }} de {{ totalPages }}</span>
            <button class="bluebutton" @click="loadNextPage"
              :disabled="pageNumber === totalPages - 1">Siguiente</button>
          </div>
        </div>
        <div class="sidebar">
          <h2>Detalles de la compra</h2>
          <table>
            <thead>
              <tr>
                <th style="padding-left: 20px; padding-right: 150px;">Producto</th>
                <th style="padding-right: 50px;">Precio</th>
                <th style="padding-right: 50px; text-align: center; ">Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart" :key="index">
                <td style="padding-left: 20px; text-align: left;">{{ item.productName }}</td>
                <td style="text-align: left;">{{ item.price }}</td>
                <td style="text-align: left;">
                  <input type="number" v-model="item.quantity" @input="updateQuantity(index, $event)"
                    style=" width: 50px; margin: auto;">
                </td>
                <td style="text-align: left;">{{ item.price * item.quantity }}</td>
                <td style="text-align: left;">
                  <button class="bluebutton" @click="eliminarProducto(index)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="total">
            Total de la compra: {{ calculateTotal() }}
          </div>
          <button class="bluebutton" @click="confirmarCompra">Confirmar compra</button>
        </div>
      </div>
      
    </div>
  </section>

</template>

<script>
import NavbarCliente from '@/components/NavbarCliente.vue';
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';


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
    updateQuantity(index, event) {
      // Validar si la entrada es un número entero
      const quantity = parseInt(event.target.value);
      if (!isNaN(quantity) && quantity >= 0 && Number.isInteger(quantity)) {
        // Si es un número entero válido, actualizar la cantidad en el carrito
        this.cart[index].quantity = quantity;
      } else {
        // Si la entrada no es válida, establecer la cantidad en 0
        this.cart[index].quantity = 0;
      }
    },
    addToCart(product) {
      const existingItemIndex = this.cart.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        this.cart[existingItemIndex].quantity++;
      } else {
        this.cart.push({
          id: product.id,
          productName: product.productName,
          price: product.price,
          quantity: 1
        });
      }
    },
    eliminarProducto(index) {
      this.cart.splice(index, 1);
    },
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    async confirmarCompra() {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = VueJwtDecode.decode(token);
          const customerId = decodedToken.id;
          console.log('ID del cliente:', customerId);
          const data = {
            customerId: customerId,
            status: "ORDEN",
            items: this.cart.map(item => ({ productId: item.id, quantity: item.quantity }))
          };
          const response = await axios.post(`/order`, data);
          window.alert('¡La compra se ha realizado con éxito!');
          console.log("Orden confirmada:", response.data);
          this.cart = [];
        }
      } catch (error) {
        window.alert('¡Error al confirmar la compra!');
        console.error("Error al confirmar la compra:", error);
      }
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
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  color: #dcdbdb;
  width: calc(25% - 10px);
  padding: 10px;
  margin: 0 5px 20px 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: rgba(79, 79, 79, 0.841);
  height: 450px;
}

.sidebar {
  flex: 1;
  background-color: rgba(79, 79, 79, 0.841);
  height: 600px;
  color: #dcdbdb;
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
  margin: auto auto;
  background-color: rgba(79, 79, 79, 0.841);
  padding: 10px 10px 10px 10px;
}

.pagination button {
  margin-right: 10px;
  margin-left: 10px;
}

.descripcion {
  text-align: justify;
}

.subframe {
  background-image: url('../assets/fondopagina.jpeg');
  background-size: 30%;
  height: 100vh; /* Altura del viewport */
  /* Cubrir todo el contenedor .subframe */
}

.bluebutton {
  color: #ffffff;
  background-color: #0b6ce2;
  padding: 10px;
  border-radius: 10px;
  align-self: center;

}
</style>
