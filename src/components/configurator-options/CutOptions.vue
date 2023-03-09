<template>
  <div class="optionsWrapper">
    <select id="falzmass-dropdown" name="falzmass-dropdown">
      <option value="" selected disabled>Falzmaß (cm)</option>
      <option value="60">60 cm</option>
      <option value="80">80 cm</option>
      <option value="100">100 cm</option>
      <option value="120">120 cm</option>
    </select>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";
.optionsWrapper {
  select {
    padding: 10px;
    box-shadow: none;
    border: 2px solid $ibis-black;
    border-radius: 50px;
    color: $ibis-black !important;
    font-size: 20px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url("../../assets/icons/arrow_down.svg");
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 1.5em;
  }
  select::-ms-expand {
    display: none;
  }
  select::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  select:focus {
    outline: none;
    border-color: $ibis-black; /* Optional: Set a custom border color */
  }
  /* Style the arrow */
}
</style>
