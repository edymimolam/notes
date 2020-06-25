<template>
  <div id="app">
    <AppHeader />
    <NotesContainer />
  </div>
</template>

<script>
import AppHeader from "./components/header/AppHeader";
import NotesContainer from "./components/notes/NotesContainer";

export default {
  name: "App",
  components: { AppHeader, NotesContainer }
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

button,
input,
optgroup,
select,
textarea {
  padding: 0;
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

:focus {
  outline: none;
}
</style>
