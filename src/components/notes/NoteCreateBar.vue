<template>
  <div class="new-note-bar-container">
    <input class="new-note-bar" placeholder="New Note..." type="text" />
  </div>
</template>

<style lang="scss" scoped>
@import "~@/design.scss";

.new-note-bar-container {
  margin: $size-new-note-bar-margin;
}

.new-note-bar {
  width: $size-new-note-bar-width;
  height: $size-bar-height;
  padding: $size-field-padding;
  border-radius: $size-field-border-radius;
  border: $border;
  font-weight: $font-weight-medium;
  color: $color-text-primary;
  background-color: $color-bg-dark;
  box-shadow: $shadow-new-note;
}
.new-note-bar::placeholder {
  color: $color-text-secondary;
}
</style>
