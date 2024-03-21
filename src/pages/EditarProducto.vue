<template>
    <Navbar />
    <div :class="$style.container">
    <BuscarProductos />

    <section :class="$style.subframe">
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
                <div :class="$style.tittles">Codigo del producto</div>
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
                        <option value="1">Sí</option>
                        <option value="0">No</option>
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
</div>



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

        submitForm() {

        }
    }
}
</script>

<style module>
.customerRegistrationFrame {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px 0px;
    max-width: 100%;
}

.subframe {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px 139px;
    box-sizing: border-box;
    text-align: left;
    font-size: 22px;
    background-image: url('../assets/fondopagina.jpeg'); 
  background-size: 100%; /* Cubrir todo el contenedor .subframe */
  background-position: center; /* Ajustar la posición de la imagen según sea necesario */
    font-family: var(--font-inter);
}

.placeholder {
    font-size: 17px;
    color: #4F7396;
    border: 2px solid #D1DBE8;
    background-color: #fffefe;
    padding: 10px;
    border-radius: 10px;
    width: 480px;
    margin-bottom: 20px
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 61px 35px 590px;
    box-sizing: border-box;
    gap: 50px 0px;
}

.container {
  display: flex; /* Utilizamos flexbox */
}

.product-container {
  flex: 1; /* El contenedor de productos ocupará el espacio disponible */
}

.subframe {
  flex: 1; /* El contenedor de la subsección ocupará el espacio disponible */
}

.tittles{
    color:rgb(255, 255, 255)
}
</style>