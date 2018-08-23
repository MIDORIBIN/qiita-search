<template>
  <v-checkbox
          v-model="tmpCheckbox"
          :label="label"
  >
  </v-checkbox>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: String,
    checkbox: {
      type: Boolean,
      default: false,
    },
  },
  // tslint:disable-next-line
  data () {
    return {
      tmpCheckbox: this.checkbox,
    };
  },
  watch: {
    tmpCheckbox(checkboxFlag: boolean) {
      this.$emit('change', checkboxFlag);
    },
  },
  mounted() {
    this.$emit('change', this.tmpCheckbox);
  },
});
</script>

<style>
</style>
