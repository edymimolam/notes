<template>
  <ul class="notes-grid">
    <Note
      v-for="note of notes"
      :key="note.id"
      :title="note.title"
      :text="note.text"
    />
  </ul>
</template>

<script>
import Note from "./Note";

export default {
  computed: {
    notes() {
      return this.$store.getters.allNotes;
    }
  },
  components: { Note }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.notes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $size-grid-gap;
}
</style>
