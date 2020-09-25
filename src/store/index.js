import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    isLoading: false,
    error: null,
    favoriteCharacters: [],
  },
  mutations: {
    [types.REQUEST_CHARACTERS](state) {
      state.isLoading = true;
      state.error = null;
    },
    [types.RECEIVE_CHARACTERS_SUCCESS](state, payload) {
      state.isLoading = false;
      state.characters = payload;
      state.error = null;
    },
    [types.RECEIVE_CHARACTERS_ERROR](state) {
      state.isLoading = false;
      state.error = 'Oh no! Something wrong happened!';
    },
    [types.ADD_TO_FAVORITES](state, character) {
      state.favoriteCharacters.push(character);
    },
    [types.REMOVE_FROM_FAVORITES](state, id) {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (char) => char.id !== id
      );
    },
  },
  actions: {
    fetchCharacters({ commit }) {
      commit(types.REQUEST_CHARACTERS);
      axios
        .get('/character')
        .then((res) => {
          commit(types.RECEIVE_CHARACTERS_SUCCESS, res.data.results);
        })
        .catch(() => {
          commit(types.RECEIVE_CHARACTERS_ERROR);
        });
    },
    addToFavorites({ commit }, payload) {
      commit(types.ADD_TO_FAVORITES, payload);
    },
    removeFromFavorites({ commit }, payload) {
      commit(types.REMOVE_FROM_FAVORITES, payload);
    },
  },
  getters: {
    isCharacterInFavorites: (state) => (id) => {
      return state.favoriteCharacters.find((char) => char.id === id);
    },
  },
});
