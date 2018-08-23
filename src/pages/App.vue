<template>
  <App>
    <template slot="header">
      <Header></Header>
    </template>
    <template slot="body">
      <SearchBar></SearchBar>
      <OptionList></OptionList>
      <TagSelect></TagSelect>
    </template>
  </App>
</template>

<script>
import Vue from 'vue';
import Header from '../components/atoms/Header';
import App from '../components/templates/App.vue';
import SearchBar from '../components/molecules/SearchBar.vue';
import TagSelect from '@/components/molecules/TagSelect.vue';
import OptionList from '@/components/organisms/OptionList.vue';

export default Vue.extend({
  components: {
    Header,
    App,
    SearchBar,
    TagSelect,
    OptionList,
  },
});
</script>
