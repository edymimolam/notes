<template>
  <li class="note-container">
    <article class="note">
      <header class="note-title">{{ title }}</header>
      <p class="note-text">{{ text }}</p>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.note-container {
  justify-self: stretch;
  display: flex;
}

.note {
  padding: $size-field-padding;
  border-radius: $size-field-border-radius;
  border: $border;
  display: flex;
  flex-flow: column;
}

.note-title {
  padding: $size-field-padding-y 0;
}
</style>
