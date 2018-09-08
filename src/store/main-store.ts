import Vue from 'vue';
import Vuex from 'vuex';
import searchStore from './search-store';
import candidateStore from './candidate-store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    searchStore,
    candidateStore,
  },
});
