<template>
    <h3 :class="$style.productos">Productos</h3>
    <input type="text" v-model="searchQuery" :class="$style.placeholder" placeholder="Search products..." @input="searchProducts">
    <div v-if="searchResults.length > 0">
      <div v-for="(product, index) in searchResults" :key="index" :class="$style.productBox" @click="selectProduct(product)">
        <div class="$style.productBox">
          <div class="$style.productInfo">
            <p :class="$style.tittles">{{ product.productName }}</p>
            <p :class="$style.tittles">{{ product.productCode }}</p>
          </div>
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
        const response = await axios.get(`/products?term=${this.searchQuery}`);
        this.searchResults = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    selectProduct(product) {
      this.$emit("product-selected", product);
    }
  },
});
</script>

<style module>
.productos {
  margin: 0;
  line-height: 27.5px;
  color: #f5f6f8;
}

.placeholder {
  font-size: 17px;
  color: #4f7396;
  border: 3px solid #8a8a8a;
  background-color: #fffefe;
  padding: 10px;
  border-radius: 10px;
  width: 280px;
  margin-bottom: 10px;
}
.tittles {
  color: rgb(46, 46, 46);
}
.productBox {
  font-size: 17px;
  background-color: #f9f9f9;
  height: 60px;
  width: 300px;
  border-radius: 10px;


  
}
.productInfo {
  color: #ffffff;
  border-radius: 5px;
}
</style>

