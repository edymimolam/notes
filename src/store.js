import Vue from "vue";
import Vuex from "vuex";

const STORAGE_KEY = "edymimolam-notes-project";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    notes: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]")
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
  },
  plugins: [
    store =>
      store.subscribe((_mutation, { notes }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
      })
  ]
});
