<template>
  <v-combobox
          v-model="chips"
          :items="items"
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
