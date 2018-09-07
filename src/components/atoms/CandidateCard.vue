<template>
  <v-card class="green--text">
    <v-card-title primary-title>
      <div class="headline">{{candidate.title}}</div>
    </v-card-title>
    <v-card-actions>
      <div class="text-xs-center">
        <v-chip v-for="tag in candidate.tagList" :key="tag"
                color="green accent-4"
                text-color="white"
                small
        >{{tag}}</v-chip>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Candidate from '../../entity/candidate';

export default Vue.extend({
  props: {
    candidate: Candidate,
  },
});
</script>

<style>
</style>
