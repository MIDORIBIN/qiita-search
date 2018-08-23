import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchKeyword: '',
    isPopular: false,
    period: '',
    tagList: [] as string[],
    isOrSearch: false,
  },
  mutations: {
    setSearchKeyword(state, keyword: string) {
      state.searchKeyword = keyword;
    },
    setPopular(state, isPopular: boolean) {
      state.isPopular = isPopular;
    },
    setPeriod(state, period: string) {
      state.period = period;
    },
    setTagList(state, tagList: string[]) {
      state.tagList = tagList;
    },
    setIsOrSearch(state, isOrSearch: boolean) {
      state.isOrSearch = isOrSearch;
    },
  },
  actions: {
  },
});
