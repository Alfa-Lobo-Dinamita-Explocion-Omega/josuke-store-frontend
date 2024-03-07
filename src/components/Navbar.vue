<template>
  <header :class="$style.navbar">
    <b :class="$style.josukeStore">Josuke Store</b>
    <div :class="$style.navegacion">
      <div :class="$style.derecha">
        <div :class="$style.inicio">Inicio</div>
        <div :class="$style.ordenes">Ordenes</div>
        <div :class="$style.producto">Producto</div>
        <div :class="$style.cliente">Cliente</div>
        <div :class="$style.menu">Menu</div>
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
  .inicio {
    position: relative;
    line-height: 21px;
    font-weight: 500;
    flex-shrink: 0;
  }
  .ordenes {
    position: relative;
    line-height: 21px;
    font-weight: 500;
    flex-shrink: 0;
  }
  .producto {
    position: relative;
    line-height: 21px;
    font-weight: 500;
    flex-shrink: 0;
  }
  .cliente {
    width: 65.2px;
    position: relative;
    line-height: 21px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .menu {
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
    width: 1105.2px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    font-size: var(--font-size-sm);
  }
  .navbar {
    width: 1280px;
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
    color: var(--color-gray-100);
    font-family: var(--font-manrope);
  }
</style>
