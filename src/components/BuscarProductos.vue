<template>
    <div :class="$style.productContainer">
      <h3 :class="$style.productos">Productos</h3>
      <input type="text" v-model="searchQuery" :class="$style.placeholder" placeholder="Search products..." @input="searchProducts">
      <div v-if="searchResults.length > 0" :class="$style.searchResults">
        <div v-for="(product, index) in searchResults" :key="index">
          <p :class="$style.tittles">{{ product.productName }}</p>
          <p :class="$style.tittles">{{ product.productCode }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import axios from "axios";
  
  export default defineComponent({
    name: "BuscarProductos",
    data() {
      return {
        searchQuery: "",
        searchResults: [],
      };
    },
    methods: {
        async searchProducts() {
      try {
        const response = await axios.get(`/products/?term=${this.searchQuery}`);
        this.searchResults = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
  </script>
  
  <style module>
  .productos {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: -0.33px;
    line-height: 27.5px;
    font-weight: 700;
    font-family: inherit;
    color: #f5f6f8;

  }
  .productContainer {
    width: 25%;
    background-color: #b4800f;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 61px 35px 20px; /* Ajusta el padding inferior según sea necesario */
    box-sizing: border-box;
    gap: 50px 0px;
  }
  .searchResults {
    margin-top: 10px; /* Ajusta según sea necesario */
  }

  .placeholder {
    font-size: 17px;
    color: #4F7396;
    border: 3px solid #8a8a8a;
    background-color: #fffefe;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 10px
}

.tittles{
    color:rgb(255, 255, 255)
}
  </style>