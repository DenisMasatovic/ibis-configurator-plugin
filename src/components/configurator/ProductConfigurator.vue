<template>
  <div class="main">
    <div class="optionListWrapper">
      <div class="optionList">
        <ul>
          <li>
            <input
              type="radio"
              id="option1"
              name="options"
              value="option1"
              checked="true"
            />
            <label for="option1">Stange</label>
          </li>
          <li>
            <input type="radio" id="option2" name="options" value="option2" />
            <label for="option2">Zuschnitt</label>
          </li>
          <li>
            <input type="radio" id="option3" name="options" value="option3" />
            <label for="option3">Gerader Schnitt</label>
          </li>
          <li>
            <input type="radio" id="option4" name="options" value="option4" />
            <label for="option4">Leerrahmen</label>
          </li>
        </ul>
      </div>
      <div class="categoryOptionsWrapper">
        <CutOptions> </CutOptions>
      </div>
    </div>
  </div>
</template>

<script>
const firebaseHandler = require("@/utility/FirebaseHandler.js");

import CutOptions from "../configurator-options/CutOptions.vue";
export default {
  components: {
    CutOptions,
  },

  mounted() {
    this.fetchAllProducts();
  },

  methods: {
    async fetchAllProducts() {
      console.log(await firebaseHandler.getAllProducts());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.main {
  width: 818px;
  height: 216px;
  left: 313px;
  top: 852px;

  background: #ffffff;
  box-shadow: 0px 8px 37px rgba(64, 64, 64, 0.1);
  border-radius: 25px;
  margin: auto;

  .optionListWrapper {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .optionList {
      ul {
        list-style-type: none;
        display: flex;
        flex-flow: column;
        gap: 17px;

        li {
          display: flex;
          font-weight: 700;
          align-items: center;

          label {
            margin-top: 3px;
            font-size: $font-size-big;
          }

          input[type="radio"] {
            appearance: none;
            background: $ibis-grey-middle;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            margin-right: 10px;
          }
          input[type="radio"]:not(:checked) + label {
            color: $ibis-grey-middle;
            transition: 0.15s;
          }

          input[type="radio"]:checked {
            background-color: $ibis-red;
            border-color: $ibis-red;
            transition: 0.15s;
          }
        }
      }
    }
    .categoryOptionsWrapper{
      height: 40%;
    }
  }
}
</style>
