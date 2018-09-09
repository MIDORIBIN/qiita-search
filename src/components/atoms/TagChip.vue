<template>
  <v-chip
          color="green accent-4"
          text-color="white"
          small
          @click="click"
  >{{tagName}}</v-chip>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tagName: String,
  },
  methods: {
    click(tagName: string) {
      this.$emit('click', tagName);
    },
  },
});
</script>

<style>
</style>
