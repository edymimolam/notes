<template>
  <button class="button" v-on="$listeners">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "~@/design.scss";

.button {
  padding: 10px 7.75px;
  font-size: 20px;
  color: $color-text-primary;
  line-height: 20px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: $transition-fast;
}
.button:hover {
  background-color: $color-bg-air;
}
</style>
