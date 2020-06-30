<template>
  <button
    v-bind="$attrs"
    :class="[{ rounded, small, accent, large }, 'button']"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.button {
  padding: 10px 7.75px;

  color: $color-text-primary;

  background: none;
  border: none;
  border-radius: $size-general-border-radius;
  cursor: pointer;
  outline: none;
  transition: $transition-fast;
  font-size: 0.875rem;
  line-height: 0.875rem;
}
.button:hover {
  background-color: $color-bg-air;
}
.rounded {
  border-radius: 50%;
}
.large {
  font-size: 1.25rem;
  line-height: 1.25rem;
}
.small {
  font-size: 0.75rem;
  line-height: 0.75rem;
  padding: 5px;
}
.accent,
.accent:hover {
  background-color: $color-accent;
}
</style>
