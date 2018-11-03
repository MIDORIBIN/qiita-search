<template>
  <v-container
          fluid
          grid-list-md
  >
    <v-layout row wrap>
      <v-flex v-for="candidate in candidateList" :key="candidate.itemId" md4>
        <CandidateCard :candidate="candidate" style="height: 100%"></CandidateCard>
      </v-flex>
    </v-layout>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CandidateCard from '@/components/molecules/CandidateCard.vue';
import InfiniteLoading from 'vue-infinite-loading';
import Candidate from '../../entity/candidate';

export default Vue.extend({
  components: {
    CandidateCard,
    InfiniteLoading,
  },
  mounted() {
    this.$store.dispatch('initCandidateList');
  },
  computed: {
    candidateList(): Candidate[] {
      return this.$store.getters.showCandidateList;
    },
    searchTagList(): string[] {
      return this.$store.getters.tagList;
    },
  },
  watch: {
    searchTagList(tagList: string[]) {
      this.$store.dispatch('searchFilter', tagList);
    },
  },
  methods: {
    infiniteHandler($state: any) {
      this.$store.dispatch('incShowCandidate')
        .then((flag: boolean) => {
          if (flag) {
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
  },
});
</script>

<style>
</style>
