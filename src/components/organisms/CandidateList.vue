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
import CandidateCard from '@/components/atoms/CandidateCard.vue';
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
    candidateList: function() {
      return this.$store.getters.showCandidateList;
    },
  },
  methods: {
    infiniteHandler($state) {
      this.$store.commit('addShowCandidateList', 30);
      $state.loaded();
    },
  },
});
</script>

<style>
</style>
