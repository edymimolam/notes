<template>
  <form>
    <div class="container">
      <button class="buttons">Ok</button>
      <input class="search-field" type="text" placeholder="Search" />
      <button class="buttons">X</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $size-search-bar-width;
  height: $size-inputs-height;
  background-color: $color-bg-light;
  border-radius: $size-inputs-border-radius;
  padding: $size-input-padding;
}
.search-field {
  background: transparent;
  color: $color-text-primary;
  border: none;
  height: $size-inputs-height;
  padding: $size-input-padding;
  width: 100%;
}
.search-field::placeholder {
  color: $color-text-primary;
}
.buttons {
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: $color-text-primary;
}
</style>
