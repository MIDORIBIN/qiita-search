<template>
  <v-layout row>
    <SwitchList></SwitchList>
    <PeriodSelect @change="periodChange"></PeriodSelect>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import PeriodSelect from '@/components/atoms/PeriodSelect.vue';
import SwitchList from '@/components/organisms/SwitchList.vue';

export default Vue.extend({
  components: {
    PeriodSelect,
    SwitchList,
  },
  methods: {
    periodChange(periodStr: string) {
      this.$store.commit('setPeriod', periodStr);
    },
  },
});
</script>

<style>
</style>
