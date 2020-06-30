<template>
  <form>
    <div class="search-bar-container">
      <BaseButton rounded large>
        <BaseIcon name="search" />
      </BaseButton>
      <BaseInput type="search" placeholder="Search" class="search-field" />
      <BaseButton rounded large>
        <BaseIcon name="times" />
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseIcon from "../base/BaseIcon";
import BaseButton from "../base/BaseButton";
import BaseInput from "../base/BaseInput";
export default {
  components: { BaseIcon, BaseButton, BaseInput }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.search-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $size-search-bar-width;
  padding: 0 $size-general-padding-x;
  border-radius: $size-general-border-radius;
  border: $border;
  background-color: $color-bg-light;
}
.search-field {
  color: $color-text-primary;
}
.search-field::placeholder {
  color: $color-text-primary;
}
</style>
