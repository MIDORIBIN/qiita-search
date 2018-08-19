<template>
  <v-btn round color="primary" dark @click="click">{{showText[showIndex]}}</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    showText: ['AND', 'OR'],
    showIndex: 0,
  }),
  methods: {
    click() {
      this.showIndex = (this.showIndex + 1) % this.showText.length;
      this.$emit('change', this.showText[this.showIndex]);
    },
  },
  mounted() {
    this.$emit('change', this.showText[this.showIndex]);
  },
});
</script>

<style>
</style>
