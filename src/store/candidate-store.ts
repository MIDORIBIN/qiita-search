import {ActionTree, GetterTree, MutationTree} from 'vuex';
import Candidate from '@/entity/candidate';
import getCandidateList from '@/service/get-candidate-list.ts';

export class State {
  public candidateList = [] as Candidate[];
  public showCandidateList = [] as Candidate[];
}

const getters = {
  showCandidateList(state) {
    return state.showCandidateList;
  },
} as GetterTree<State, any>;

const mutations = {
  setCandidateList(state, candidateList: Candidate[]) {
    state.candidateList = candidateList;
  },
  setShowCandidateList(state, endIndex: number) {
    state.showCandidateList = state.candidateList.slice(0, endIndex);
  },
} as MutationTree<State>;

const actions = {
  initCandidateList({ commit }) {
    commit('setCandidateList', getCandidateList);
    commit('setShowCandidateList', 30);
  },
  searchFilter({ commit }, tagList: string[]) {
    const arrayFilter = (target: string[], conditionList: string[]): boolean => {
      return conditionList
        .map((condition: string) => target.indexOf(condition) >= 0)
        .reduce((pre: boolean, cur: boolean) => pre && cur, true);
    };
    const filterList = getCandidateList
      .filter((candidate: Candidate) => arrayFilter(candidate.tagList, tagList));
    commit('setCandidateList', filterList);
    commit('setShowCandidateList', 30);
  },
  incShowCandidate({ commit, state }) {
    commit('setShowCandidateList', state.showCandidateList.length + 30);
    return state.showCandidateList.length !== state.candidateList.length;
  },
} as ActionTree<State, any>;

export default {
  state: new State(),
  getters,
  mutations,
  actions,
};
