<template>
  <v-container
          fluid
          grid-list-sm
  >
    <v-layout row>
      <v-flex xs6>
        <SwitchList></SwitchList>
      </v-flex>
      <v-flex xs3>
        <PeriodSelect @change="periodChange"></PeriodSelect>
      </v-flex>
      <v-flex xs3>
        <SortSelect @change="sortChange"></SortSelect>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import PeriodSelect from '@/components/atoms/PeriodSelect.vue';
import SwitchList from '@/components/organisms/SwitchList.vue';
import SortSelect from '@/components/atoms/SortSelect.vue';

export default Vue.extend({
  components: {
    PeriodSelect,
    SwitchList,
    SortSelect,
  },
  methods: {
    periodChange(periodStr: string) {
      this.$store.commit('setPeriod', periodStr);
    },
    sortChange(sortStr: string) {
      this.$store.commit('setSort', sortStr);
    },
  },
});
</script>

<style>
</style>
