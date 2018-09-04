<template>
  <v-select
          v-model="select"
          :items="items"
          item-text="state"
          item-value="abbr"
          return-object
          single-line
          color="green accent-4"
  >
  </v-select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    select: { state: '関連順', abbr: 'rel' },
    items: [
      { state: '新着順', abbr: 'created' },
      { state: '関連順', abbr: 'rel' },
      { state: 'ストック数順', abbr: 'stock' },
    ],
  }),
  mounted() {
    this.$emit('change', this.select.abbr);
  },
  watch: {
    select() {
      this.$emit('change', this.select.abbr);
    },
  },
});
</script>

<style>
</style>
