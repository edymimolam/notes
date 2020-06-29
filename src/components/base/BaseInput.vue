<template>
  <input class="input" v-on="$listeners" />
</template>

<style lang="scss" scoped>
@import "~@/design.scss";
.input {
  padding: $size-general-padding;
  width: 100%;
  border: none;
  background: transparent;
}
</style>
