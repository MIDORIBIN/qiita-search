<template>
  <App>
    <template slot="header">
      <Header></Header>
    </template>
    <template slot="body">
      <HelloWorld></HelloWorld>
    </template>
  </App>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Vue from 'vue';
import Header from '../components/atoms/Header';
import App from '../components/templates/App.vue';

export default Vue.extend({
  components: {
    HelloWorld,
    Header,
    App,
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
});
</script>
