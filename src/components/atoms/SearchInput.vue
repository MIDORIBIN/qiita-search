<template>
  <v-text-field
          solo
          label="Qiitaを検索"
          append-icon="search"
          @change="change"
  ></v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    change(keyword: string) {
      this.$store.commit('setSearchKeyword', keyword);
    },
  },
});
</script>

<style>
</style>
