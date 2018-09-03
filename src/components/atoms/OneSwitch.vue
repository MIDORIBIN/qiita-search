<template>
  <v-switch
          v-model="tmpSwitch"
          :label="label"
          color="green accent-4"
  >
  </v-switch>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: String,
    switch: {
      type: Boolean,
      default: false,
    },
  },
  // tslint:disable-next-line
  data () {
    return {
      tmpSwitch: this.switch,
    };
  },
  watch: {
    tmpSwitch(switchFlag: boolean) {
      this.$emit('change', switchFlag);
    },
  },
  mounted() {
    this.$emit('change', this.tmpSwitch);
  },
});
</script>

<style>
</style>
