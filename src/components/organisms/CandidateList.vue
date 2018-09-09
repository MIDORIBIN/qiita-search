<template>
  <v-container
          fluid
          grid-list-sm
  >
    <v-layout row wrap>
      <v-flex v-for="candidate in candidateList" :key="candidate.itemId" xs4>
        <CandidateCard :candidate="candidate"></CandidateCard>
      </v-flex>
    </v-layout>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CandidateCard from '@/components/molecules/CandidateCard.vue';
import InfiniteLoading from 'vue-infinite-loading';

export default Vue.extend({
  components: {
    CandidateCard,
    InfiniteLoading,
  },
  mounted() {
    this.$store.dispatch('initCandidateList');
  },
  computed: {
    candidateList: function() { // tslint:disable-line
      return this.$store.getters.showCandidateList;
    },
    searchTagList: function () { // tslint:disable-line
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
