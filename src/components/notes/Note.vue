<template>
  <li class="note-container">
    <NoteEdit v-if="isEdit" @note-edited="isEdit = false" :id="note.id" />
    <article class="note" @click="isEdit = true">
      <header class="note-title">{{ note.title }}</header>
      <p class="note-text">{{ note.text }}</p>
    </article>
  </li>
</template>

<script>
import NoteEdit from "./NoteEdit";

export default {
  data: () => ({
    isEdit: false
  }),
  props: {
    note: {
      type: Object
    }
  },
  components: { NoteEdit }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.note-container {
  display: flex;
}

.note {
  display: flex;
  flex-flow: column;
  height: fit-content;
  width: 100%;
  padding: $size-general-padding;
  border-radius: $size-general-border-radius;
  border: $border;
}

.note-title {
  padding: $size-general-padding-y 0;
}
</style>
