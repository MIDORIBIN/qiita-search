<template>
  <v-select
          v-model="select"
          :items="items"
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
    select: '関連順',
    items: [
      '新着順',
      '関連順',
      'ストック数順',
    ],
  }),
  mounted() {
    this.$emit('change', this.select);
  },
  watch: {
    select() {
      this.$emit('change', this.select);
    },
  },
});
</script>

<style>
</style>
