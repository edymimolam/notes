<template>
  <form>
    <div class="search-bar-container">
      <BaseButton>
        <BaseIcon name="search" />
      </BaseButton>
      <input class="search-field" type="text" placeholder="Search" />
      <BaseButton>
        <BaseIcon name="times" />
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseIcon from "../base/BaseIcon";
import BaseButton from "../base/BaseButton";
export default {
  components: { BaseIcon, BaseButton }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.search-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $size-search-bar-width;
  height: $size-bar-height;
  padding: $size-general-padding;
  border-radius: $size-general-border-radius;
  background-color: $color-bg-light;
}
.search-field {
  width: 100%;
  height: $size-bar-height;
  padding: $size-general-padding;
  color: $color-text-primary;
  background: transparent;
  border: none;
}
.search-field::placeholder {
  color: $color-text-primary;
}
</style>
