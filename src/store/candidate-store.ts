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
  addShowCandidateList(state, addNumber: number) {
    state.showCandidateList = state.candidateList
      .slice(0, state.showCandidateList.length + addNumber);
  },
} as MutationTree<State>;

const actions = {
  initCandidateList({ commit }) {
    commit('setCandidateList', getCandidateList);
    commit('addShowCandidateList', 30);
  },
} as ActionTree<State, any>;

export default {
  state: new State(),
  getters,
  mutations,
  actions,
};
