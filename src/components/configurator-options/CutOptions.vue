<template>
  <div class="optionsWrapper">
    <q-btn-dropdown color="primary" label="Dropdown Button">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";
.optionsWrapper {
    .q-btn:before{
        box-shadow: none;
    }
    .text-white{
        color: $ibis-black !important;
    }
}
</style>
