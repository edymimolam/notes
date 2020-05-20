<template>
  <ul>
    <Note v-for="note of notes" :key="note" :text="note" />
  </ul>
</template>

<script>
import Note from "./Note";

export default {
  name: "NotesList",
  data: () => ({ notes: [...`Notes`] }),
  components: { Note }
};
</script>

<style></style>
