<template>
    <div class="login-container">
      <section class="login-section">
        <div class="login-form">
          <h3>Iniciar sesión</h3>
          <div class="input-group">
            <label for="userName">Nombre de usuario:</label>
            <input v-model="userName" type="text" id="userName"  placeholder="Ingrese su nombre de usuario" />
          </div>
          <div class="input-group">
            <label for="password">Contraseña:</label>
            <input v-model="password" type="password" id="password"  placeholder="Ingrese su contraseña" />
          </div>
          <div class="input-group">
            <button @click="login">Iniciar sesión</button>
          </div>
          <div class="input-group">
            <router-link :to="{name: 'RegistroCliente'}">
              <button >Registrarse</button>
            </router-link>
          </div>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import VueJwtDecode from 'vue-jwt-decode'
  export default {
    data() {
      return {
        userName: '',
        password: '',
        errorMessage: ''
      }
    },
  
    methods: {
      async login() {
        if (!this.userName || !this.password) {
          this.errorMessage = 'Por favor ingrese su nombre de usuario y contraseña.';
        } else {
          const payload = {
                userName: this.userName,
                password: this.password,
          };
          try {
            const response = await this.axios.post('/auth/login', payload);
            console.log(response)
            localStorage.setItem('token',response.data.jWttoken);
            alert('sesión iniciada');
            
              const decodedToken = VueJwtDecode.decode(response.data.jWttoken);
              if(decodedToken.role==="CLIENT"){
                this.$router.push('/ComprarProductos');
              }
              else{
                this.$router.push('/EditarProducto');
              }
            
            
          } catch (error) {
            console.error('Error al enviar el formulario:', error);
            
          }
          
        }
      }
    }
  }
  </script>
  
  <style scoped>


  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f8ff; /* Azul claro */
  }
  
  .login-section {
    background-color: #fff; /* Fondo blanco */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
  }
  </style>