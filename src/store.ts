import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchKeyword: '',
    period: '',
    tagList: [] as string[],
    isPopular: false,
    isOrSearch: false,
    isTitle: false,
    isBody: false,
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
    setIsTitle(state, isTitle: boolean) {
      state.isTitle = isTitle;
    },
    setIsBody(state, isBody: boolean) {
      state.isBody = isBody;
    },
  },
  actions: {
  },
});
