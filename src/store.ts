import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchKeyword: '',
    period: '',
    sort: '',
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
    setPeriod(state, period: string) {
      state.period = period;
    },
    setSort(state, sort: string) {
      state.sort = sort;
    },
    setTagList(state, tagList: string[]) {
      state.tagList = tagList;
    },
    setIsPopular(state, isPopular: boolean) {
      state.isPopular = isPopular;
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
  getters: {
    isOrSearch(state) {
      return state.isOrSearch;
    },
    isTitle(state) {
      return state.isTitle;
    },
    isBody(state) {
      return state.isBody;
    },
  },
});
