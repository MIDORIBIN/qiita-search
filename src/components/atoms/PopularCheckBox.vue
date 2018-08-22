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
      this.$emit('change', this.checkbox);
    },
  },
  mounted() {
    this.$emit('change', this.checkbox);
  },
});
</script>

<style>
</style>
