<template>
  <div class="content-wrapper">
    <div class="content">
      <NoteCreate />
      <NotesList />
    </div>
  </div>
</template>

<script>
import NoteCreate from "./NoteCreate";
import NotesList from "./NotesList";

export default {
  components: { NoteCreate, NotesList }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.content-wrapper {
  border-top: $border;
}

.content {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  max-width: $size-content-width-max;
}
</style>
