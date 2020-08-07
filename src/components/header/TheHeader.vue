<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="search-bar-wrapper">
        <SearchBar />
      </div>
    </header>
    <div class="extender"></div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  components: { SearchBar }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 $size-general-padding-x;
  background-color: $color-bg-dark;
  box-shadow: $shadow-header;
  z-index: 1;
}
.search-bar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $size-header-height;
}
.extender {
  height: $size-header-height;
}
</style>
