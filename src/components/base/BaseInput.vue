<template>
  <input class="input" v-on="$listeners" />
</template>

<style lang="scss" scoped>
@import "~@/design.scss";
.input {
  padding: $size-input-padding;
  width: 100%;
  border: none;
}
</style>
