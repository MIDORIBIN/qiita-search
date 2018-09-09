import {ActionTree, GetterTree, MutationTree} from 'vuex';

export class State {
  public searchKeyword = '';
  public period = '';
  public sort = '';
  public tagList = [] as string[];
  public isPopular = false;
  public isOrSearch = false;
  public isTitle = false;
  public isBody = false;
}

const getters = {
  isOrSearch(state) {
    return state.isOrSearch;
  },
  isTitle(state) {
    return state.isTitle;
  },
  isBody(state) {
    return state.isBody;
  },
  tagList(state) {
    return state.tagList;
  },
} as GetterTree<State, any>;

const mutations = {
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
} as MutationTree<State>;

const actions = {
} as ActionTree<State, any>;

export default {
  state: new State(),
  getters,
  mutations,
  actions,
};
