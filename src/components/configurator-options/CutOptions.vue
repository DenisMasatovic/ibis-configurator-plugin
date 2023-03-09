<template>
  <div class="optionsWrapper">
    <div class="topRow">
      <select>
        <option value="" selected disabled>Falzmaß (cm)</option>
        <option value="60">60 cm</option>
        <option value="80">80 cm</option>
        <option value="100">100 cm</option>
        <option value="120">120 cm</option>
      </select>
      <div class="topNumberInputs">
        <input type="number" value="52" />
        <span>x</span>
        <input type="nubmer" value="100" />
      </div>
    </div>
    <div class="bottomRow">
      <select>
        <option value="" selected disabled>Anzahl Ränder</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <input type="number" value="1">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";
.optionsWrapper {
  .topRow {
    display: flex;
    align-items: center;
    gap: 1em;

    .topNumberInputs {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: calc(8px + 0.8vw);
    }
  }

  .bottomRow {
    margin-top: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      padding: 7px 10px;
      box-shadow: none;
      border: 2px solid $ibis-red;
      border-radius: 50px;
      color: $ibis-black !important;
      font-size: 20px;
      max-width: 4vw;
      text-align: center;
    }
    input:focus {
      outline: none;
      border-color: $ibis-red;
    }
  }
  select {
    padding: 7px 20px;
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
    background-position: calc(95%) center;
    padding-right: 2em;
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
    border-color: $ibis-black;
  }

  input {
    padding: 7px 10px;
    box-shadow: none;
    border: 2px solid $ibis-black;
    border-radius: 50px;
    color: $ibis-black !important;
    font-size: 20px;
    max-width: 4vw;
    text-align: center;
  }
}
input:focus {
  outline: none;
  border-color: $ibis-black;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
