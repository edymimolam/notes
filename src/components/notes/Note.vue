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
