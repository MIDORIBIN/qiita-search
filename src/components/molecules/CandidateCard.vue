<template>
  <v-card elevation-24 :hover=true style="position: relative">
    <v-card-title primary-title @click="link">
      <div class="headline">{{candidate.title}}</div>
    </v-card-title>
    <v-card-actions color="green accent-4">
      <div class="text-md-center">
        <TagChip
                v-for="tagName in candidate.tagList" :key="tagName"
                :tagName="tagName"
                @click="tagClick(tagName)"
        ></TagChip>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Candidate from '../../entity/candidate';
import TagChip from '@/components/atoms/TagChip.vue';

type Prop<T> = () => T;

export default Vue.extend({
  components: {
    TagChip,
  },
  props: {
    candidate: Object as Prop<Candidate>,
  },
  methods: {
    link() {
      window.open('https://qiita.com/items/' + this.candidate.itemId);
    },
    tagClick(tagName: string) {
      this.$store.dispatch('addTag', tagName);
    },
  },
});
</script>

<style>
</style>
