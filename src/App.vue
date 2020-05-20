<template>
  <div id="app">
    <MainHeader />
    <NewNote />
    <NotesList />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import NewNote from "./components/NewNote";
import NotesList from "./components/NotesList";

export default {
  name: "App",
  components: { MainHeader, NewNote, NotesList }
};
</script>

<style>
@import "./settings.css";
</style>
