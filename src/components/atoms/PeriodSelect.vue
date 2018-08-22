<template>
  <v-select
          v-model="select"
          :items="items"
          item-text="state"
          item-value="abbr"
          return-object
          single-line
  >

  </v-select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    select: { state: '期間指定なし', abbr: '' },
    items: [
      { state: '期間指定なし', abbr: '' },
    ],
  }),
  mounted() {
    const periodArray = [1, 3, 6, 12];
    const periodStrArray = ['1か月以内', '3か月以内', '6か月以内', '1年以内'];
    periodArray.map((period: number) => {
        const date = new Date();
        date.setMonth(date.getMonth() - period);
        return date;
      })
      .map((date: Date) => date.toISOString())
      .map((date: string) => date.substr(0, 10))
      .forEach((date: string, index: number) => {
        this.items.push({ state: periodStrArray[index], abbr: date });
      });
  },
  watch: {
    select() {
      this.$store.commit('setPeriod', this.select.abbr);
    },
  },
});
</script>

<style>
</style>
