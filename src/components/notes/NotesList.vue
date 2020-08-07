<template>
  <ul class="notes-grid">
    <Note v-for="note of notes" :key="note.id" :note="note" />
  </ul>
</template>

<script>
import Note from "./Note";

export default {
  computed: {
    notes() {
      return this.$store.state.searchQuery === ""
        ? this.$store.getters.allNotes
        : this.$store.getters.foundNotes;
    }
  },
  components: { Note }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.notes-grid {
  display: grid;
  gap: $size-grid-gap;
}

@media (min-width: 480px) {
  .notes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .notes-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
