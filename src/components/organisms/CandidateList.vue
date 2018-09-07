<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex v-for="i in 6" :key="i" xs4>
        <CandidateCard :candidate="candidate"></CandidateCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CandidateCard from '@/components/atoms/CandidateCard.vue';

export default Vue.extend({
  components: {
    CandidateCard,
  },
  data: () => ({
    candidate: {title: 'title title', tagList: ['a', 'b']},
  }),
});
</script>

<style>
</style>
