<template>
  <SearchInput @change="inputChange"></SearchInput>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchInput from '@/components/atoms/SearchInput.vue';

export default Vue.extend({
  components: {
    SearchInput,
  },
  methods: {
    inputChange(keyword: string) {
      this.$store.commit('setSearchKeyword', keyword);
    },
  },
});
</script>

<style>
</style>
