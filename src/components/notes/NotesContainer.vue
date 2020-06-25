<template>
  <div class="container">
    <NewNote />
    <NotesList />
  </div>
</template>

<script>
import NewNote from "./NewNote";
import NotesList from "./NotesList";

export default {
  name: "NotesContainer",
  components: { NewNote, NotesList }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.container {
  display: flex;
  flex-flow: column;
  align-items: center;
  border-top: $border;
}
</style>
