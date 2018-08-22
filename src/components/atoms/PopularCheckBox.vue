<template>
  <v-checkbox
          v-model="checkbox"
          label="人気"
  >
  </v-checkbox>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    checkbox: false,
  }),
  watch: {
    checkbox() {
      this.$store.commit('setPopular', this.checkbox);
    },
  },
  mounted() {
    this.$store.commit('setPopular', this.checkbox);
  },
});
</script>

<style>
</style>
