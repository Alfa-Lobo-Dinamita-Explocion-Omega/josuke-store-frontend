<template>
    <Navbar />
    <section :class="$style.subframe">
        <div :class="$style.buscarProductos">
        <BuscarProductos @product-selected="loadProductInfo" />
        </div>
        <div :class="$style.customerRegistrationFrame">
            <h3 :class="$style.tittles">
                Modificar producto
            </h3>
            <div>
                <div>
                    <div :class="$style.tittles">Nombre del producto</div>
                    <div>
                        <input v-model="productName" :class="$style.placeholder" placeholder="e.j hamburguesa" type="text" />
                    </div>
                </div>
                <div :class="$style.tittles">Código del producto</div>
                <div>
                    <input v-model="productCode" :class="$style.placeholder" placeholder="e.j 1234" type="text" />
                </div>
                <div :class="$style.tittles">Precio</div>
                <div>
                    <input v-model="price" :class="$style.placeholder" placeholder="$0.0" type="text" />
                </div>
                <div :class="$style.tittles">Descripción</div>
                <textarea v-model="productDescription" :class="$style.placeholder2"
                    placeholder="e.j hamburguesa sencilla con carne artesal, queso y tomate"></textarea>

                <div :class="$style.tittles">Disponible</div>
                <div>
                    <select v-model="isAvailable" :class="$style.placeholder">
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div :class="$style.tittles">URL imagen</div>
                <div>
                  <input v-model="urlProductImage" :class="$style.placeholder" placeholder="e.j: https://www.bing.com/images/create/un-gato-programador2c-que-parezca-real-no-una-caric/1-65e8b1de88e242f8a2bcdd4afaa8ca8e?id=QpuCq3bBBR3oOPLnPN7V6w%3d%3d&view=detailv2&idpp=genimg&thId=OIG1.0fLX69uNsKLML7OFKEUO&FORM=GCRIDP&mode=overlay" type="text" />
                </div>
            </div>
            <button @click="submitForm" :class="$style.bluebutton">Save</button>
        </div>
    </section>



</template>

<script>
import Navbar from "../components/Navbar.vue";
import BuscarProductos from "../components/BuscarProductos.vue";
export default {
    components: { Navbar ,BuscarProductos },

    data() {
        return {
            productCode: '',
            productName: '',
            productDescription: '',
            price:'',
            isAvailable:'',
            urlProductImage:'',
        }
    },
    methods: {
        loadProductInfo(product) {
            this.id= product.id;
            this.productCode = product.productCode;
            this.productName = product.productName;
            this.productDescription =product.productDescription;
            this.price =product.price;
            this.isAvailable =product.isAvailable;
            this.urlProductImage =product.urlProductImage;
        },
        async submitForm() {
            this.errors = {};

            if (!this.productName) {
                this.errors.productName = 'El nombre del producto es obligatorio.';
            }
            if (!this.productCode) {
                this.errors.productCode = 'Código del producto es obligatorio.';
            }

            if (!this.productDescription) {
                this.errors.productDescription = 'Descripción del producto es obligatoria.';
            }
            if (!this.price) {
                this.errors.price = 'Precio del producto es obligatorio.';
            } else if (isNaN(parseFloat(this.price))) {
                this.errors.price = 'El precio debe ser un número válido.';
            }
            if (!this.isAvailable) {
                this.errors.isAvailable = 'Disponibilidad del producto es obligatoria.';
            }
            if (!this.urlProductImage) {
                this.errors.urlProductImage = 'URL de la imagen es obligatoria.';
            }


            if (this.errors.productName || this.errors.productCode || this.errors.productDescription || this.errors.price || this.errors.isAvailable || this.errors.urlProductImage) {
                return;
            }


            const payload = {
                id: this.id,
                productCode: this.productCode,
                productName: this.productName,
                productDescription: this.productDescription,
                price: this.price,
                isAvailable: this.isAvailable,
                urlProductImage: this.urlProductImage
            };
            try {

                const response = await this.axios.put('/products', payload);
                console.log(response);
                alert(`Producto actualizado exitosamente`); 
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            }
            
            this.productCode = '';
            this.productName = '';
            this.productDescription = '';
            this.price = '';
            this.isAvailable = '';
            this.urlProductImage = '';
        }
    }
}
</script>

<style module>
.customerRegistrationFrame {
    width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: rgba(79, 79, 79, 0.841);
    margin-top: 20px;
}

.subframe {
    display: flex;
    font-size: 22px;
    background-image: url('../assets/fondopagina.jpeg'); 
    background-size: 50%; /* Cubrir todo el contenedor .subframe */
}

.placeholder {
    font-size: 17px;
    color: #4F7396;
    border: 2px solid #D1DBE8;
    background-color: #fffefe;
    padding: 10px;
    border-radius: 10px;
    width: 480px;
    margin-bottom: 10px;
}

.placeholder2 {
    font-size: 17px;
    color: #1d6ec0;
    border: 2px solid #D1DBE8;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    width: 480px;
    height: 100px;
    margin-bottom: 10px;

}

.bluebutton {
    font-size: 17px;
    color: #ffffff;
    border: 2px solid #D1DBE8;
    background-color: #0b6ce2;
    padding: 10px;
    border-radius: 10px;
    width: 480px;
    align-self: center;
    margin-bottom: 20px;
    margin-top: 20px;

}


.productos {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: -0.33px;
    line-height: 27.5px;
    font-weight: 700;
    font-family: inherit;
}

.productContainer {
    width: 25%;
    background-color: #c8dee4;
    overflow: hidden;
    flex-shrink: 0;
    flex-direction: column;
    padding: 61px 35px 590px;
    box-sizing: border-box;
    
    
}



.product-container {
  flex: 1; 
}


.tittles{
    color:rgb(255, 255, 255);
}

.buscarProductos{
  margin-top: 20px;
  text-align: center;
  width: 25%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 35px;
  box-sizing: border-box;
  gap: 20px;
  height: 700px;
  background-color: rgba(79, 79, 79, 0.841);
  border-radius: 10px;
}
</style>