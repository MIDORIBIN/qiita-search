<template>
  <App @keyup.native.enter="search">
    <template slot="header">
      <Header></Header>
    </template>
    <template slot="body">
      <SearchBar></SearchBar>
      <OptionList></OptionList>
      <TagSelect></TagSelect>
      <CandidateList></CandidateList>
    </template>
  </App>
</template>

<script>
import Vue from 'vue';
import request from '@/service/request-service.ts';
import Header from '../components/atoms/Header';
import App from '../components/templates/App.vue';
import SearchBar from '../components/molecules/SearchBar.vue';
import TagSelect from '@/components/molecules/TagSelect.vue';
import OptionList from '@/components/organisms/OptionList.vue';
import CandidateList from '@/components/organisms/CandidateList.vue';

export default Vue.extend({
  components: {
    Header,
    App,
    SearchBar,
    TagSelect,
    OptionList,
    CandidateList,
  },
  methods: {
    search() {
      request();
    },
  },
});
</script>
