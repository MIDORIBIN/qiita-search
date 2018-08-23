import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchKeyword: '',
    andOr: '',
    isPopular: false,
    period: '',
    tagList: [] as string[],
  },
  mutations: {
    setSearchKeyword(state, keyword: string) {
      state.searchKeyword = keyword;
    },
    setAndOr(state, andOr: string) {
      state.andOr = andOr;
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
  },
  actions: {
  },
});
