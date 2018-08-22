<template>
  <v-container>
    <v-layout row fill-height>
      <PopularCheckBox @change="popularChange"></PopularCheckBox>
      <PeriodSelect @change="periodChange"></PeriodSelect>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import PopularCheckBox from '@/components/atoms/PopularCheckBox.vue';
import PeriodSelect from '@/components/atoms/PeriodSelect.vue';

export default Vue.extend({
  components: {
    PopularCheckBox,
    PeriodSelect,
  },
  methods: {
    popularChange(isPopular: boolean) {
      this.$store.commit('setPopular', isPopular);
    },
    periodChange(periodStr: string) {
      this.$store.commit('setPeriod', periodStr);
    },
  },
});
</script>

<style>
</style>
