<template>
  <v-text-field
          solo
          label="Qiitaを検索"
          append-icon="search"
          @change="change"
          @click:append="search"
  ></v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';
import request from '@/service/request-service.ts';

export default Vue.extend({
  methods: {
    change(keyword: string) {
      keyword = keyword === undefined ? '' : keyword;
      this.$emit('change', keyword);
    },
    search() {
      request();
    },
  },
});
</script>

<style>
</style>
