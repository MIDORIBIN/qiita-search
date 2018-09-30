<template>
  <v-combobox
          v-model="selectedTagList"
          :items="tagList"
          label="タグ検索"
          chips
          prepend-icon="local_offer"
          solo
          multiple
  >
    <template slot="selection" slot-scope="data">
      <v-chip
              :selected="data.selected"
              close
              color="green accent-4"
              text-color="white"
              @input="remove(data.item)"
      >
        <strong>{{ data.item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
</template>

<script lang="ts">
import Vue from 'vue';
import getTagList from '@/service/get-tag-list.ts';

export default Vue.extend({
  data: () => ({
    tagList: [] as string[],
    selectedTagList: [] as string[],
  }),
  methods: {
    remove(tag: string) {
      this.$store.dispatch('deleteTag', tag);
    },
  },
  mounted() {
    this.tagList.push(...getTagList);
  },
  computed: {
    storeTagList: function() { // tslint:disable-line
      return this.$store.getters.tagList;
    },
  },
  watch: {
    storeTagList(list: string[]) {
      this.selectedTagList = list;
    },
    selectedTagList(list: string[]) {
      this.$store.commit('setTagList', list);
    },
  },
});
</script>

<style>
</style>
