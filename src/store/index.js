import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    [types.FETCH_CHARACTERS](state) {
      state.characters = [
        {
          name: 'Test character',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg',
          location: {
            name: 'Unknown',
          },
        },
      ];
    },
  },
});
