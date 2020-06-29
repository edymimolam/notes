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
    ADD_NOTE: (state, { title, text }) =>
      state.notes.push({
        title,
        text,
        id: Date.now()
      }),
    EDIT_NOTE: (state, { id, ...note }) => {
      let index = state.notes.findIndex(n => n.id === id);
      let newNote = Object.assign({}, state.notes[index], note);

      state.notes.splice(index, 1, newNote);
    }
  },
  getters: {
    allNotes: ({ notes }) => notes.slice().reverse(),
    noteById: ({ notes }) => id => notes.find(note => note.id === id)
  },
  plugins: [
    store =>
      store.subscribe((_mutation, { notes }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
      })
  ]
});
