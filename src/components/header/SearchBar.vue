<template>
  <form>
    <div class="search-bar-container">
      <button class="buttons">Ok</button>
      <input class="search-field" type="text" placeholder="Search" />
      <button class="buttons">X</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "~@/design.scss";

.search-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $size-search-bar-width;
  height: $size-bar-height;
  padding: $size-field-padding;
  border-radius: $size-field-border-radius;
  background-color: $color-bg-light;
}
.search-field {
  width: 100%;
  height: $size-bar-height;
  padding: $size-field-padding;
  color: $color-text-primary;
  background: transparent;
  border: none;
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
