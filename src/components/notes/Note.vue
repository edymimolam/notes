<template>
  <li class="note-container">
    <NoteEdit v-if="isEdit" @note-edited="isEdit = false" :id="note.id" />
    <article class="note" @click="isEdit = true">
      <BaseButton
        rounded
        small
        accent
        class="remove-button"
        @click="removeNote"
      >
        <BaseIcon name="times" />
      </BaseButton>

      <header class="note-title">{{ note.title }}</header>
      <p class="note-text">{{ note.text }}</p>
    </article>
  </li>
</template>

<script>
import NoteEdit from "./NoteEdit";
import BaseIcon from "../base/BaseIcon";
import BaseButton from "../base/BaseButton";

export default {
  data: () => ({
    isEdit: false
  }),
  methods: {
    removeNote() {
      this.$store.commit("REMOVE_NOTE", this.note);
    }
  },
  props: {
    note: {
      type: Object
    }
  },
  components: { NoteEdit, BaseIcon, BaseButton }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.note-container {
  display: flex;
}

.note {
  position: relative;
  display: flex;
  flex-flow: column;
  height: fit-content;
  width: 100%;
  padding: $size-general-padding;
  border-radius: $size-general-border-radius;
  border: $border;
}
.note:hover .remove-button {
  opacity: 1;
}

.note-title {
  padding: $size-general-padding-y 0;
}
.remove-button {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: $transition-fast;
}
</style>
