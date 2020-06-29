import Vue from "vue";
import Vuex from "vuex";
import notes from "../notes.json";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    notes
  }
});
