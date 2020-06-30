import Vue from "vue";
import Vuex from "vuex";

const STORAGE_KEY = "edymimolam-notes-project";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    searchQuery: "",
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
    },
    REMOVE_NOTE: (state, { id }) => {
      let index = state.notes.findIndex(n => n.id === id);
      state.notes.splice(index, 1);
    },
    SET_SEARCH_QUERY: (state, newQuery) => (state.searchQuery = newQuery)
  },
  getters: {
    allNotes: ({ notes }) => notes.slice().reverse(),
    foundNotes: ({ notes, searchQuery }) =>
      notes.filter(
        ({ text, title }) =>
          title.includes(searchQuery) || text.includes(searchQuery)
      ),
    noteById: ({ notes }) => id => notes.find(note => note.id === id)
  },
  plugins: [
    store =>
      store.subscribe((_mutation, { notes }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
      })
  ]
});
