<template>
  <v-combobox
          v-model="chips"
          :items="items"
          label="Your favorite hobbies"
          chips
          prepend-icon="filter_list"
          solo
          multiple
  >
    <template slot="selection" slot-scope="data">
      <v-chip
              :selected="data.selected"
              close
              @input="remove(data.item)"
      >
        <strong>{{ data.item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
</template>

<script lang="ts">
import Vue from 'vue';
import tagList from '@/service/getTagList.ts';

export default Vue.extend({
  data: () => ({
    chips: [] as string[],
    items: [] as string[],
  }),
  methods: {
    remove(item: string) {
      this.chips.splice(this.chips.indexOf(item), 1);
    },
  },
  mounted() {
    this.items.push(...tagList);
  },
  watch: {
    chips() {
      this.$store.commit('setTagList', this.chips);
    },
  },
});
</script>

<style>
</style>
