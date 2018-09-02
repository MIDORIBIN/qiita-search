<template>
  <v-layout row>
    <CheckBoxList></CheckBoxList>
    <PeriodSelect @change="periodChange"></PeriodSelect>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import CheckBoxList from '@/components/organisms/CheckBoxList.vue';
import PeriodSelect from '@/components/atoms/PeriodSelect.vue';

export default Vue.extend({
  components: {
    CheckBoxList,
    PeriodSelect,
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
