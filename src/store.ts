import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchKeyword: '',
  },
  mutations: {
    setSearchKeyword(state, keyword: string) {
      state.searchKeyword = keyword;
      console.log(state.searchKeyword);
    },
  },
  actions: {

  },
});
