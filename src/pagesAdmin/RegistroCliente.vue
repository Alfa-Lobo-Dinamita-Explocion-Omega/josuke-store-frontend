<template>
  <section :class="$style.subframe">
    <div :class="$style.customerRegistrationFrame">
      <h3 :class="$style.tittles">
        Registro Clientes Josuke Store
      </h3>
      <div :class="$style.tittles">Nombre completo</div>
      <div>
        <input v-model="name" :class="$style.placeholder2" placeholder="Ingrese su nombre" type="text" />
        <span v-if="errors.name" class="error-message" style="color: red; font-size: 18px;">{{ errors.name }}</span>
      </div>
      <div :class="$style.tittles">Correo electrónico</div>
      <div>
        <input v-model="email" :class="$style.placeholder2" placeholder="example@gmail.com" type="text" />
        <span v-if="errors.email" class="error-message" style="color: red; font-size: 18px;">{{ errors.email }}</span>
      </div>
      <div :class="$style.tittles">Nombre de usuario</div>
      <div>
        <input v-model="userName" :class="$style.placeholder2" placeholder="user123" type="text" />
        <span v-if="errors.userName" class="error-message"
          style="color: red; font-size: 18px;">{{ errors.userName }}</span>
      </div>
      <div :class="$style.tittles">Contraseña</div>
      <div>
        <input v-model="password" :class="$style.placeholder2" placeholder="user123" type="password" />
        <span v-if="errors.password" class="error-message"
          style="color: red; font-size: 18px;">{{ errors.password }}</span>
      </div>
      <div :class="$style.lastNameInput">
        <div>
          <div>
            <div :class="$style.tittles">Teléfono
            </div>
            <div>
              <input v-model="phone" :class="$style.placeholder" placeholder="E.j: 340205335" type="number" step="1" />
            </div>
            <span v-if="errors.phone" class="error-message" style="color: red; font-size: 12px;">{{ errors.phone }}</span>
          </div>
        </div>
        <div>
          <div>
            <div :class="$style.tittles"><Noscript></Noscript>N° de documento</div>
            <div>
              <input v-model="idUser" :class="$style.placeholder" placeholder="Ingrese N° de documento"  type="number" step="1" />
            </div>
            <span v-if="errors.idUser" class="error-message"
              style="color: red; font-size: 12px;">{{ errors.idUser }}</span>
          </div>
        </div>
      </div>
      <div :class="$style.tittles">Dirección</div>
      <div>
        <input v-model="address" :class="$style.placeholder2" placeholder="Ingrese su direccion" type="text" />
      </div>
      <div :class="$style.lastNameInput">
        <div>
          <div>
            <div :class="$style.tittles">País
            </div>
            <div>
              <input v-model="country" :class="$style.placeholder" placeholder="ingrese el nombre de su pais" type="text" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div :class="$style.tittles"><Noscript></Noscript>Departamento</div>
            <div>
              <input v-model="department" :class="$style.placeholder" placeholder="ej: antioquia" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.lastNameInput">
        <div>
          <div>
            <div :class="$style.tittles">Ciudad
            </div>
            <div>
              <input v-model="city" :class="$style.placeholder" placeholder="ej: medellin" type="text" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div :class="$style.tittles"><Noscript></Noscript>Código postal</div>
            <div>
              <input v-model="postalCode" :class="$style.placeholder" placeholder="Codigo postal" type="text" />
            </div>
          </div>
        </div>
      </div>
      <button v-on:click="submitForm" :class="$style.bluebutton">Registar</button>
      <router-link :to="{name: 'PaginaInicio'}">
        <button :class="$style.redbutton">Cancelar</button>
      </router-link>
      

    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      idUser: '',
      address: '',
      city: '',
      postalCode: '',
      userName: '',
      password: '',
      department: '',
      country: '',
      errors: {},
      role: "CLIENT"
    }
  },
  methods: {


    async submitForm() {

      this.errors = {};

      if (!this.name) {
        this.errors.name = 'El nombre es obligatorio.';
      }
      if (!this.email) {
        this.errors.email = 'El correo es obligatorio';
      } else if (!this.validateEmail(this.email)) {
        this.errors.email = 'El correo electrónico no tiene un formato válido';
      }
      if (!this.password) {
        this.errors.password = 'La contraseña es obligatoria';
      } else if (!this.validatePassword(this.password)) {
        this.errors.password = 'La contraseña debe tener al menos 6 caracteres y contener al menos una letra y un número';
      }
      if (!this.userName) {
        this.errors.userName = 'El numero de telefono es obligatorio';
      }

      if (!this.phone) {
        this.errors.phone = 'El numero de telefono es obligatorio';
      } else if (isNaN(parseFloat(this.phone)) || this.phone.length < 10 || this.phone.length > 15) {
        this.errors.phone = 'El numero de telefono debe tener entre 10 y 15 caracteres numéricos';
      }
      if (!this.idUser) {
        this.errors.idUser = 'El numero de documento es obligario';
      } else if (isNaN(parseFloat(this.idUser))) {
        this.errors.idUser = 'El numero de documento solo puede contener numeros';
      }

      if (this.errors.name || this.errors.email || this.errors.userName || this.errors.phone || this.errors.password || this.errors.idUser) {
        return;
      }

      const payload = {
        name: this.name,
        email: this.email,
        userName: this.userName,
        phone: this.phone,
        password: this.password,
        idUser: this.idUser,
        address: this.address,
        country: this.country,
        postalCode: this.postalCode,
        city: this.city,
        department :this.department
      };
      try {

        const response = await this.axios.post('/users', payload);
        console.log(response);
        alert(`usuario guardado exitosamente`);

      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
      
      this.name = '';
      this.email = '';
      this.userName = '';
      this.phone = '';
      this.idUser = '';
      this.password = '';
      this.address = '';
      this.country = '';
      this.postalCode = '';
      this.city = '';
      this.department = '';
    },

    validateEmail(email) {
      // Basic email validation using regex
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },

    validatePassword(password) {
      // Password should have at least 6 characters, 1 letter, and 1 number
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      return regex.test(password);
    }
  }
}
</script>

<style module>
.lastNameInput {
  display: flex;
  gap: 0px 25px;
  justify-content: center;
}


.customerRegistrationFrame { 
  text-align: center;
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
  background-color: #fffbfb;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px
}

.placeholder2 {
  font-size: 17px;
  color: #1d6ec0;
  border: 2px solid #D1DBE8;
  background-color: #fffdfd;
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
    align-self: center;
    margin-bottom: 20px;
    margin-top: 20px;
}
.redbutton{
  font-size: 17px;
    color: #ffffff;
    border: 2px solid #D1DBE8;
    background-color: #e20b0b;
    padding: 10px;
    border-radius: 10px;
    width: 480px;
    align-self: center;
    margin-bottom: 20px;
    margin-top: 20px;
}

.tittles{
    color:rgb(255, 255, 255)
}
</style>
