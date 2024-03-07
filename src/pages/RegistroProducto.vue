<template>
    <Navbar />
    <section :class="$style.subframe">
        <div :class="$style.customerRegistrationFrame">
            <h3>
                Ingresar producto
            </h3>
            <div>
                <div>
                    <div>Nombre del producto</div>
                    <div>
                        <input :class="$style.placeholder" placeholder="e.j hamburguesa" type="text" />
                    </div>
                </div>
                <div>Codigo del producto</div>
                <div>
                    <input :class="$style.placeholder" placeholder="e.j 1234" type="text" />
                </div>
                <div>Precio</div>
                <div>
                  <input :class="$style.placeholder" placeholder="$0.0" type="text" />
                </div>
                <div>Descripción</div>
                <textarea :class="$style.placeholder2" v-model="message" placeholder="e.j hamburguesa sencilla con carne artesal, queso y tomate" ></textarea>
                <div>disponible</div>
                <div>
                  <input :class="$style.placeholder" placeholder="e.j hamburguesa" type="text" />
                </div>
            </div>
            <button :class="$style.bluebutton">save</button>
        </div>

    </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    components: { Navbar },

    data() {
        return {
            nombre: '',
            apellido: '',
            telefono: ''
        }
    },
    methods: {
        submitForm() {
            alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}\nTeléfono: ${this.telefono}`);
            this.nombre = '';
            this.apellido = '';
            this.telefono = '';
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
    max-width: 100%;
    text-align: left;
    font-size: 22px;
    color: var(--color-gray-200);
    font-family: var(--font-inter);
}

.placeholder {
    font-size: 17px;
    color: #4F7396;
    border: 2px solid #D1DBE8;
    background-color: #ededed;
    padding: 10px;
    border-radius: 10px;
    width: 480px;
    margin-bottom: 20px

}

.placeholder2 {
    font-size: 17px;
    color: #1d6ec0;
    border: 2px solid #D1DBE8;
    background-color: #ededed;
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
</style>