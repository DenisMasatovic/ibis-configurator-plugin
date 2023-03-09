<template>
  <ProductConfigurator/>
</template>

<script>

import ProductConfigurator from './components/configurator/ProductConfigurator.vue'

export default {
  name: 'App',
  components: {
    ProductConfigurator
  }
}
</script>

<style lang="scss">
@import "./assets/sass/style.scss";

#app {
  font-family: 'Raleway';
  color: $ibis-black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  input{
    font-family: 'Raleway';
  }
  select{
    font-family: 'Raleway';
  }
}
</style>
