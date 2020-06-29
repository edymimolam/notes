import Vue from "vue";
import Vuex from "vuex";
import notes from "../notes.json";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    notes
  },
  mutations: {
    addNote: (state, note) => state.notes.push(note)
  },
  actions: {
    addNote: ({ commit }, { title, text }) => {
      commit("addNote", {
        title,
        text,
        id: Date.now()
      });
    }
  },
  getters: {
    allNotes: ({ notes }) => notes.slice().reverse()
  }
});
