<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <SearchBar />
      </div>
    </header>
    <div class="extender"></div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  name: "AppHeader",
  components: { SearchBar }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: $color-bg-dark;
  box-shadow: $shadow-header;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $size-header-height;
}
.extender {
  height: $size-header-height;
}
</style>
