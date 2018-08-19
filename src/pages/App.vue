<template>
  <App>
    <template slot="header">
      <Header></Header>
    </template>
    <template slot="body">
      <SearchInput></SearchInput>
      <AndOrButton></AndOrButton>
      <HelloWorld></HelloWorld>
    </template>
  </App>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Vue from 'vue';
import Header from '../components/atoms/Header';
import App from '../components/templates/App.vue';
import SearchInput from '../components/atoms/SearchInput.vue';
import AndOrButton from '../components/atoms/AndOrButton.vue';

export default Vue.extend({
  components: {
    HelloWorld,
    Header,
    App,
    SearchInput,
    AndOrButton,
  },
});
</script>
