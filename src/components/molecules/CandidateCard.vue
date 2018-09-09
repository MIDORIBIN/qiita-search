<template>
  <v-card class="green--text">
    <v-card-title primary-title @click="link">
      <div class="headline" style="cursor:pointer">{{candidate.title}}</div>
    </v-card-title>
    <v-card-actions>
      <div class="text-xs-center">
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
