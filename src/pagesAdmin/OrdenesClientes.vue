<template>
  <section class="subframe">
  <div>
    <Navbar />
    <div class="container">
      <div id="box1" class="box">
        <h3 id="title">Ordenes recibidas</h3>
        <div v-for="order in orders" :key="order.id">
          <OrderCard :order="order" @open-modal="openModal" />
        </div>
      </div>
      <div id="box2" class="box">
        <h3>Ordenes en proceso</h3>
      </div>
      <div id="box3" class="box">
        <h3>Ordenes terminadas</h3>
      </div>
      <OrderModal v-if="selectedOrder" :order="selectedOrder" @close="closeModal" />
    </div>
  </div>
</section>

</template>

<script>
import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import OrderCard from '../components/OrderCard.vue';
import OrderModal from '../components/OrderModal.vue';


export default {
  components: {
    Navbar,
    OrderCard,
    OrderModal
  },
  data() {
    return {  
      orders: [],
      selectedOrder: null,
      intervalId: null, // Variable para almacenar el ID del intervalo
      showModal: false // Variable para controlar la visibilidad del modal
    };
  },

  mounted() {
    // Llama al método searchProducts cuando el componente se monta
    this.searchProducts();
  },

  methods: {
    async searchProducts() {
      try {
        const response = await axios.get('/order');
        console.log(response.data); // Verifica la estructura de la respuesta
        this.orders = response.data; // Asigna los datos a 'orders'
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }, 

    startPolling() {
      // Realiza una solicitud cada 5 segundos
      this.intervalId = setInterval(async () => {
        try {
          await this.searchProducts();
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }, 5000);
    },    
    stopPolling() {
      // Detiene la solicitud periódica
      clearInterval(this.intervalId);
    },


    openModal(order) {
      this.selectedOrder = order;
    },
    closeModal() {
      this.selectedOrder = null;
    }
  },

  beforeUnmount() {
    // Limpia el intervalo antes de destruir el componente
    clearInterval(this.intervalId);
  }
};
</script>

<style scope>

body {
    font-family: Arial, sans-serif;
}
.container {
    width: 90%;
    margin:1em;
    margin-left:3em;
    display: flex;
    justify-content: space-between;
    height: 500px;
    
    
}
.content {
    height: calc(100vh - 40px); /* Altura del contenido igual a la altura de la ventana menos el padding de la barra de navegación */
}


.box {
    padding: 20px;
    box-sizing: border-box; 
    width: 350px;
    cursor: pointer; /* Agregado para mostrar que es interactivo */

}
#box1 {
    overflow-y: auto; /* Agregar barra de desplazamiento vertical */
    background-color: #ffcc00; /* Amarillo */
}
#box2 {
    background-color: #3366ff; /* Azul */
}
#box3 {
    background-color: #ff6666; /* Rojo */
}

modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

.subframe {
  background-size: 30%; /* Cubrir todo el contenedor .subframe */
  background-image: url('../assets/fondopagina.jpeg');
  width: 100vw; /* Abarca todo el ancho de la ventana */
  height: 100vh; /* Abarca todo el alto de la ventana */
}
</style>