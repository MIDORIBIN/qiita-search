<template>
  <v-combobox
          v-model="selectTagList"
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
import tagList from '@/service/get-tag-list.ts';

export default Vue.extend({
  data: () => ({
    tagList: [] as string[],
  }),
  methods: {
    remove(item: string) {
      const index = this.selectTagList.indexOf(item);
      this.selectTagList.splice(index, 1);
    },
  },
  mounted() {
    this.tagList.push(...tagList);
  },
  computed: {
    selectTagList: {
      get: function(): string[] {
        return this.$store.getters.tagList;
      },
      set: function(list) {
        this.$store.commit('setTagList', list);
      }

    },
  },
});
</script>

<style>
</style>
