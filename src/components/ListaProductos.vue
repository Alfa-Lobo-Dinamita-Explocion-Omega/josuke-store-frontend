<template>
    <div class="product-list">
      <div>
      <div :class="$style.frameParent">
        <div>imagen</div>
        <div>
          <div>producto name</div>
          <div>
            <p :class="$style.precio1">precio</p>
            <div>buy</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products']
  };
  </script>
  
  <style module>

.precio1 {
  margin: 0;
}

.frameParent {
  background-color: #ff0000;
  padding: 80px 30px;
  margin-bottom: 30px; /* Agregado margen inferior */
}

  </style>
  