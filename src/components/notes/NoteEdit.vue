<template>
  <div class="editor-wrapper" v-on="$listeners">
    <div
      class="editor-container"
      v-on-clickaway="finishEdit"
      @keyup.enter="finishEdit"
    >
      <BaseInput class="editor-input editor-title" v-model="title" />
      <BaseInput class="editor-input" v-model="text" />
      <div class="button-container">
        <BaseButton @click="removeNote">Delete</BaseButton>
        <BaseButton @click="finishEdit">Close</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import BaseInput from "../base/BaseInput";
import BaseButton from "../base/BaseButton";

export default {
  mixins: [clickaway],
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    removeNote() {
      this.$store.commit("REMOVE_NOTE", this.note);
    },
    finishEdit() {
      if (!this.text && !this.title) {
        this.removeNote();
      }
      this.$emit("note-edited");
    }
  },
  computed: {
    note() {
      return this.$store.getters.noteById(this.id);
    },
    title: {
      get() {
        return this.note.title;
      },
      set(title) {
        let id = this.id;
        this.$store.commit("EDIT_NOTE", { title, id });
      }
    },
    text: {
      get() {
        return this.note.text;
      },
      set(text) {
        let id = this.id;
        this.$store.commit("EDIT_NOTE", { text, id });
      }
    }
  },
  components: {
    BaseInput,
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.editor-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 $size-general-padding-x;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-bg-dark-transparent;
  z-index: 1;
}

.editor-container {
  background-color: $color-bg-dark;
  border: $border;
  border-radius: $size-general-border-radius;
  box-shadow: $shadow-note-edit;
}
.editor-input {
  color: $color-text-primary;
}
.editor-title {
  font-size: $font-size-title;
}
.button-container {
  display: flex;
  justify-content: space-between;
  padding: $size-general-padding;
}
</style>
