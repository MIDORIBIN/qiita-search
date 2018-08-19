import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchKeyword: '',
    andOr: '',
  },
  mutations: {
    setSearchKeyword(state, keyword: string) {
      state.searchKeyword = keyword;
    },
    setAndOr(state, andOr: string) {
      state.andOr = andOr;
      console.log(state.andOr);
    },
  },
  actions: {

  },
});
