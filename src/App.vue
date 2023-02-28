<template>
  <ProductConfigurator/>
</template>

<script>

import "./assets/sass/style.scss"
import ProductConfigurator from './components/ProductConfigurator.vue'

export default {
  name: 'App',
  components: {
    ProductConfigurator
  }
}
</script>

<style>
#app {
  font-family: 'Raleway';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
