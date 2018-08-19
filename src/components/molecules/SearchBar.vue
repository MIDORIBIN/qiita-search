<template>
  <v-container>
    <v-layout row fill-height>
      <SearchInput @change="inputChange"></SearchInput>
      <AndOrButton @change="andOrChange"></AndOrButton>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import AndOrButton from '@/components/atoms/AndOrButton.vue';
import SearchInput from '@/components/atoms/SearchInput.vue';

export default Vue.extend({
  components: {
    AndOrButton,
    SearchInput,
  },
  methods: {
    inputChange(keyword: string) {
      this.$store.commit('setSearchKeyword', keyword);
    },
    andOrChange(andOr: string) {
      this.$store.commit('setAndOr', andOr);
    },
  },
});
</script>

<style>
</style>
