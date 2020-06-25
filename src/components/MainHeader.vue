<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <Search />
      </div>
    </header>
    <div class="extender"></div>
  </div>
</template>

<script>
import Search from "./Search";
export default {
  name: "MainHeader",
  components: { Search }
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
  height: $header-height;
}
.extender {
  height: $header-height;
}
</style>
