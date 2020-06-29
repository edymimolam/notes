<template>
  <form
    class="note-create-container"
    @click="startEdit"
    v-on-clickaway="finishEdit"
    @submit.prevent="finishEdit"
    @keyup.enter="finishEdit"
  >
    <BaseInput
      v-model.trim="title"
      v-show="isEditing"
      class="note-create"
      placeholder="Title"
      type="text"
    />
    <BaseInput
      v-model.trim="text"
      class="note-create"
      placeholder="New Note..."
      type="text"
    />
  </form>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import BaseInput from "../base/BaseInput";

export default {
  mixins: [clickaway],
  data: () => ({
    title: "",
    text: "",
    isEditing: false
  }),
  methods: {
    finishEdit() {
      if (this.title || this.text) {
        this.$store.commit("ADD_NOTE", { title: this.title, text: this.text });
        this.title = "";
        this.text = "";
      }

      this.isEditing = false;
    },
    startEdit() {
      this.isEditing = true;
    }
  },
  components: { BaseInput }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.note-create-container {
  margin: $size-note-create-margin-y auto;
  width: $size-note-create-width;
  background-color: $color-bg-dark;
  border: $border;
  border-radius: $size-general-border-radius;
  box-shadow: $shadow-note-create;
}

.note-create {
  font-weight: $font-weight-medium;
  color: $color-text-primary;
}
.note-create::placeholder {
  color: $color-text-secondary;
}
</style>
