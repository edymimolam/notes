<template>
  <div class="wrapper">
    <input class="new-note" placeholder="New Note..." />
  </div>
</template>

<script>
export default {
  name: "NewNote"
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.wrapper {
  margin: 2rem auto 1rem auto;
}

.new-note {
  width: $size-new-note-width;
  height: $size-inputs-height;
  padding: $size-input-padding;
  color: $color-text-primary;
  font-weight: $font-weight-medium;
  background-color: $color-bg-dark;
  border: $border;
  border-radius: $size-inputs-border-radius;
  box-shadow: $shadow-new-note;
}
</style>
