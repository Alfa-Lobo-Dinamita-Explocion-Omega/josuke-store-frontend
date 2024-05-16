<template>
  <header :class="$style.navbar">
    <b :class="$style.josukeStore">Josuke Store</b>
    <div :class="$style.navegacion">
      <div :class="$style.derecha">
        <router-link :to="{ name: 'PaginaInicio' }" :class="$style.link">Inicio</router-link>
        <router-link :to="{ name: 'ComprarProductos' }" :class="$style.link">Ordenes</router-link>
        <router-link :to="{ name: 'RegistroProducto' }" :class="$style.link">Registar Producto</router-link>
        <router-link :to="{ name: 'EditarProducto' }" :class="$style.link">Editar Producto</router-link>
        <router-link :to="{ name: 'OrdenesClientes' }" :class="$style.link">Pedidos</router-link>

      </div>
    </div>
  </header>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NavigationMenu",
  });
</script>
<style module>

  .josukeStore {
    position: relative;
    letter-spacing: -0.27px;
    line-height: 22.5px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .link {
    position: relative;
    line-height: 21px;
    font-weight: 500;
    flex-shrink: 0;
    
  }
  .linkIcon {
    height: 20px;
    width: 20px;
    position: relative;
  }
  .derecha {
    align-self: stretch;
    width: 434.7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .navegacion {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    max-width: 100%;
    font-size: var(--font-size-sm);
    background-color:#b4b4b4cc; 


  }
  .navbar {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #9f9f9fcc; 
  }

  
</style>
