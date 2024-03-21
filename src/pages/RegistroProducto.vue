<template>
      <div class="product-entry-container">
    <Navbar />
    <section :class="$style.subframe">
        <div :class="$style.customerRegistrationFrame">
            <h3 :class="$style.tittles">
                Ingresar producto
            </h3>
            <div>
                <div>
                    <div :class="$style.tittles" >Nombre del producto</div>
                    <div>
                        <input v-model="productName" :class="$style.placeholder" placeholder="E.j hamburguesa" type="text" />
                        <span v-if="errors.productName" class="error-message" style="color: red; font-size: 20px;">{{ errors.productName }}</span>
                    </div>
                </div>
                <div :class="$style.tittles">Codigo del producto</div>
                <div>
                    <input v-model="productCode" :class="$style.placeholder" placeholder="E.j 1234" type="text" />
                    <span v-if="errors.productCode" class="error-message" style="color: red; font-size: 20px;">{{errors.productCode }}</span>
                </div>
                <div :class="$style.tittles">Precio</div>
                <div>
                    <input v-model="price" :class="$style.placeholder" placeholder="E.j $10000" type="number" step="1" />
                    <span v-if="errors.price" class="error-message" style="color: red; font-size: 20px;">{{ errors.price
                        }}</span>
                </div>
                <div :class="$style.tittles">Descripción</div>
                <textarea v-model="productDescription" :class="$style.placeholder2"
                    placeholder="E.j hamburguesa sencilla con carne artesal, queso y tomate"></textarea>
                <span v-if="errors.productDescription" class="error-message" style="color: red; font-size: 20px;">{{ errors.productDescription }}</span>
                <div :class="$style.tittles">Disponible</div>
                <div>
                    <select v-model="isAvailable" :class="$style.placeholder">
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>
                    <span v-if="errors.isAvailable" class="error-message" style="color: red; font-size: 20px;">{{ errors.isAvailable }}</span>
                </div>
                <div :class="$style.tittles">URL imagen</div>
                <div>
                    <input v-model="urlProductImage" :class="$style.placeholder"
                        placeholder="e.j: https://www.bing.com/images/create/un-gato-programador2c-que-parezca-real-no-una-caric/1-65e8b1de88e242f8a2bcdd4afaa8ca8e?id=QpuCq3bBBR3oOPLnPN7V6w%3d%3d&view=detailv2&idpp=genimg&thId=OIG1.0fLX69uNsKLML7OFKEUO&FORM=GCRIDP&mode=overlay"
                        type="text" />
                    <span v-if="errors.urlProductImage" class="error-message" style="color: red; font-size: 20px;">{{
                        errors.urlProductImage }}</span>
                </div>
            </div>
            <button v-on:click="submitForm" :class="$style.bluebutton">Save</button>

        </div>

    </section>
</div>

</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    components: { Navbar },

    data() {

        return {
            productCode: '',
            productName: '',
            productDescription: '',
            price: '',
            isAvailable: '',
            urlProductImage: '',
            errors: {}

        }
    },
    methods: {

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
                productCode: this.productCode,
                productName: this.productName,
                productDescription: this.productDescription,
                price: this.price,
                isAvailable: this.isAvailable,
                urlProductImage: this.urlProductImage
            };
            try {

                const response = await this.axios.post('/products', payload);
                console.log(response);
                console.log('Guardado exitosamente');
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            }
            alert(`Producto guardado exitosamente`);


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
.product-entry-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e168;
}

.customerRegistrationFrame {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px 0px;
    max-width: 100%;
}

.subframe {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  text-align: left;
  font-size: 22px;
  background-image: url('../assets/fondopagina.jpeg'); 
  background-size: 100%; /* Cubrir todo el contenedor .subframe */
  background-position: center; /* Ajustar la posición de la imagen según sea necesario */
}

.placeholder {
    font-size: 17px;
    color: #4F7396;
    border: 2px solid #D1DBE8;
    background-color: #fffefe;
    padding: 10px;
    border-radius: 10px;
    width: 200%;
    margin-bottom: 20px
}

.placeholder2 {
    font-size: 17px;
    color: #1d6ec0;
    border: 2px solid #D1DBE8;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    width: 200%;
    height: 100px;
    margin-bottom: 20px
}

.bluebutton {
    font-size: 17px;
    color: #ffffff;
    border: 2px solid #D1DBE8;
    background-color: #0b6ce2;
    padding: 10px;
    border-radius: 10px;
    width: 480px;
}

.tittles{
    color:rgb(255, 255, 255)
}
</style>