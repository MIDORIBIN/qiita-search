<template>
  <v-container>
    <v-layout row>
      <PopularCheckBox @change="popularChange"></PopularCheckBox>
      <OrCheckBox @change="orChange"></OrCheckBox>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import PopularCheckBox from '@/components/molecules/PopularCheckBox.vue';
import OrCheckBox from '@/components/molecules/OrCheckBox.vue';

export default Vue.extend({
  components: {
    PopularCheckBox,
    OrCheckBox,
  },
  methods: {
    popularChange(isPopular: boolean) {
      this.$store.commit('setPopular', isPopular);
    },
    orChange(orFlag: boolean) {
      this.$store.commit('setIsOrSearch', orFlag);
    },
  },
});
</script>

<style>
</style>
