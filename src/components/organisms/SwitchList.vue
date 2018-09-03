<template>
  <v-layout>
    <OneSwitch label="人気" @change="popular" :switch=true></OneSwitch>
    <OneSwitch label="OR検索" @change="or"></OneSwitch>
    <OneSwitch label="タイトル" @change="title"></OneSwitch>
    <OneSwitch label="本文" @change="body"></OneSwitch>
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
      this.$store.commit('setPopular', isPopular);
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
});
</script>

<style>
</style>
