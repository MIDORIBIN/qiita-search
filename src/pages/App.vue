<template>
  <App>
    <template slot="header">
      <Header></Header>
    </template>
    <template slot="body">
      <SearchBar></SearchBar>
      <PopularCheckBox></PopularCheckBox>
      <PeriodSelect></PeriodSelect>
    </template>
  </App>
</template>

<script>
import Vue from 'vue';
import Header from '../components/atoms/Header';
import App from '../components/templates/App.vue';
import SearchBar from '../components/molecules/SearchBar.vue';
import PopularCheckBox from '../components/atoms/PopularCheckBox.vue';
import PeriodSelect from '@/components/atoms/PeriodSelect.vue';

export default Vue.extend({
  components: {
    Header,
    App,
    SearchBar,
    PopularCheckBox,
    PeriodSelect,
  },
});
</script>
