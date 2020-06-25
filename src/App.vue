<template>
  <div id="app">
    <AppHeader />
    <NewNote />
    <NotesList />
  </div>
</template>

<script>
import AppHeader from "./components/header/AppHeader";
import NewNote from "./components/NewNote";
import NotesList from "./components/NotesList";

export default {
  name: "App",
  components: { AppHeader, NewNote, NotesList }
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "~@/design.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: $font-family;
  color: $color-text-primary;
  background-color: $color-bg-dark;
  margin: 0;
  padding: 0;
  min-width: 360px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
