<template>
  <header :class="$style.navbar">
    <b :class="$style.josukeStore">Josuke Store</b>
    <div :class="$style.navegacion">
      <div :class="$style.derecha">
        <router-link :to="{ name: 'PaginaInicio' }" :class="$style.link">Inicio</router-link>
        <div :class="$style.link">Ordenes</div>
        <router-link :to="{ name: 'RegistroProducto' }" :class="$style.link">Producto</router-link>
        <router-link :to="{ name: 'EditarProducto' }" :class="$style.link">Producto</router-link>
        <div :class="$style.link">Menu</div>
        <router-link :to="{ name: 'RegistroCliente' }" :class="$style.link">Registro</router-link>

        <img
          :class="$style.linkIcon"
          loading="lazy"
          alt=""
          src="/vector--0.svg"
        />
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
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    font-size: var(--font-size-sm);
    background-color:  #17e4ebf6;; /* Azul claro */

  }
  .navbar {
    width: 100%;
    border-bottom: 1px solid var(--color-gainsboro);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-xs) var(--padding-21xl);
    top: 0;
    z-index: 99;
    position: sticky;
    gap: var(--gap-0);
    row-gap: 20px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-lg);
    font-family: var(--font-manrope);
    background-color: #17e4ebf6; /* Azul claro */

  }

  
</style>
