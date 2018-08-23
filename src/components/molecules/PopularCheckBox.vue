<template>
  <OneCheckBox
          label="人気"
          checkbox="checkbox"
          @change="change"
  ></OneCheckBox>
</template>

<script lang="ts">
import Vue from 'vue';
import OneCheckBox from '@/components/atoms/OneCheckBox.vue';

export default Vue.extend({
  components: {
    OneCheckBox,
  },
  data: () => ({
    checkbox: true,
  }),
  methods: {
    change(checkboxFlag: boolean) {
      this.$emit('change', checkboxFlag);
    },
  },
});
</script>

<style>
</style>
