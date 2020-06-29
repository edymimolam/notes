<template>
  <div class="note-create-container">
    <BaseInput class="note-create" placeholder="New Note..." type="text" />
  </div>
</template>

<script>
import BaseInput from "../base/BaseInput";

export default {
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
  font-weight: inherit;
  color: $color-text-primary;
}
.note-create::placeholder {
  color: $color-text-secondary;
}
</style>
