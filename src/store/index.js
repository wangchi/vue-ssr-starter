import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const createStore = () => {
  return new Vuex.Store({
    state: {
      name: 'walker',
      newsList: []
    },
    getters: {
      name: state => state.name,
      newsList: state => state.newsList
    },
    actions: {
      fetchNewsList({ commit }) {
        return axios.get('http://127.0.0.1:3000/api/newslist').then((res) => {
          if (res.data.code === 0) {
            commit('setNewsList', res.data.data);
          } else {
            console.log('error');
          }
        });
      }
    },
    mutations: {
      setNewsList(state, data) {
        state.newsList = data;
      }
    }
  });
};
