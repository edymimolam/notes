<template>
  <div id="app">
    <TheHeader />
    <NotesContainer />
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader";
import NotesContainer from "./components/notes/NotesContainer";

export default {
  name: "App",
  components: { TheHeader, NotesContainer }
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
  font-family: $font-family-content;
  color: $color-text-primary;
  background-color: $color-bg-dark;
  margin: 0;
  padding: 0;
  min-width: 360px;
  overflow-x: hidden;
  overflow-y: auto;
}

button,
input,
optgroup,
select,
textarea {
  font-family: $font-family-secondary;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

:focus {
  outline: none;
}
</style>
