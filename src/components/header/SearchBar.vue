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
  max-width: 720px;
  display: flex;
  align-items: center;
  width: 710px;
  height: 46px;
  background-color: $color-bg-light;
  border-radius: 8px;
  padding: 0 8px;
}
.search-field {
  background: transparent;
  border: none;
  height: 46px;
  width: 100%;
  margin-left: 8px;
  color: $color-text-primary;
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
  padding: 0 5px;
  line-height: 0;
  color: $color-text-primary;
}
</style>
