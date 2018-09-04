<template>
  <v-layout>
    <OneSwitch label="人気" @change="popular" :switch=true></OneSwitch>
    <OneSwitch label="OR検索" @change="or" :disabled="titleBodyFlag"></OneSwitch>
    <OneSwitch label="タイトル" @change="title" :disabled="orFlag"></OneSwitch>
    <OneSwitch label="本文" @change="body" :disabled="orFlag"></OneSwitch>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import OneSwitch from '../atoms/OneSwitch.vue';

export default Vue.extend({
  components: {
    OneSwitch,
  },
  methods: {
    popular(isPopular: boolean) {
      this.$store.commit('setIsPopular', isPopular);
    },
    or(isOr: boolean) {
      this.$store.commit('setIsOrSearch', isOr);
    },
    title(isTitle: boolean) {
      this.$store.commit('setIsTitle', isTitle);
    },
    body(isBody: boolean) {
      this.$store.commit('setIsBody', isBody);
    },
  },
  computed: {
    orFlag: function() { // tslint:disable-line
      return this.$store.getters.isOrSearch;
    },
    titleBodyFlag: function() { // tslint:disable-line
      return this.$store.getters.isTitle || this.$store.getters.isBody;
    },
  },
});
</script>

<style>
</style>
