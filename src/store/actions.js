import * as types from './mutation-types';

export default {
  [types.INCREMENT]({ commit }) {
    commit(types.INCREMENT);
  },
  [types.DECREMENT]({ commit }) {
    commit(types.DECREMENT);
  },
  [types.RESET]({ commit }) {
    commit(types.RESET);
  },
};
