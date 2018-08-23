<template>
  <App>
    <template slot="header">
      <Header></Header>
    </template>
    <template slot="body">
      <SearchBar></SearchBar>
      <PopularAndPeriod></PopularAndPeriod>
      <TagSelect></TagSelect>
    </template>
  </App>
</template>

<script>
import Vue from 'vue';
import Header from '../components/atoms/Header';
import App from '../components/templates/App.vue';
import SearchBar from '../components/molecules/SearchBar.vue';
import PopularAndPeriod from '@/components/molecules/PopularAndPeriod.vue';
import TagSelect from '@/components/molecules/TagSelect.vue';

export default Vue.extend({
  components: {
    Header,
    App,
    SearchBar,
    PopularAndPeriod,
    TagSelect,
  },
});
</script>
