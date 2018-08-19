<template>
  <v-container>
    <v-layout row fill-height>
      <SearchInput></SearchInput>
      <AndOrButton></AndOrButton>
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
});
</script>

<style>
</style>
