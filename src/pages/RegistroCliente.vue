<template>
  <Navbar />
  <section :class="$style.subframe">
    <div :class="$style.customerRegistrationFrame">
      <h3>
        Registro Clientes Josuke Store
      </h3>
      <div>
        <div :class="$style.lastNameInput">
          <div>
            <div>
              <div>Nombres</div>
              <div>
                <input :class="$style.placeholder" placeholder="ingrese su nombre" type="text" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>apellido</div>
              <div>
                <input :class="$style.placeholder" placeholder="ingrese su apellido" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>correo electronico</div>
        <div>
          <input :class="$style.placeholder2" placeholder="example@gmail.com" type="text" />
        </div>
        <div>telefono</div>
        <div>
          <input :class="$style.placeholder2" placeholder="example: 340205335" type="text" />
        </div>
        <div :class="$style.lastNameInput">
          <div>
            <div>
              <div>tipo de documento
              </div>
              <div>
                <input :class="$style.placeholder" placeholder="selecione su tipo de documento" type="text" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div><Noscript></Noscript>N° de documento</div>
              <div>
                <input :class="$style.placeholder" placeholder="ingrese N° de documento" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div>Direccion</div>
        <div>
          <input :class="$style.placeholder2" placeholder="ingrese su direccion" type="text" />
        </div>
        <div :class="$style.lastNameInput">
          <div>
            <div>
              <div>pais
              </div>
              <div>
                <input :class="$style.placeholder" placeholder="selecione su pais" type="text" />
              </div>
             
            </div>
          </div>
          <div>
            <div>
              <div><Noscript></Noscript>departamento</div>
              <div>
                <input :class="$style.placeholder" placeholder="ej: antioquia" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.lastNameInput">
          <div>
            <div>
              <div>ciudad
              </div>
              <div>
                <input :class="$style.placeholder" placeholder="ej: medellin" type="text" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div><Noscript></Noscript>codigo postal</div>
              <div>
                <input :class="$style.placeholder" placeholder="codigo postal" type="text" />
              </div>
            </div>
          </div>
        </div>
        <button :class="$style.bluebutton">Registrar</button>

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
.lastNameInput {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 25px;
}


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
