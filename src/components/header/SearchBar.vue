<template>
  <div @blur.capture="finishSearch" @focus.capture="startSearch">
    <div :class="[{ active: isSearching }, 'search-bar-container']">
      <BaseButton
        class="search-buttons"
        :disabled="isSearching"
        rounded
        large
        @click="startSearch"
      >
        <BaseIcon name="search" />
      </BaseButton>
      <BaseInput
        ref="search"
        placeholder="Search"
        class="search-field"
        v-model="search"
      />
      <BaseButton class="search-buttons" v-show="isSearching" rounded large>
        <BaseIcon name="times" />
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseIcon from "../base/BaseIcon";
import BaseButton from "../base/BaseButton";
import BaseInput from "../base/BaseInput";
export default {
  data: () => ({
    isSearching: false
  }),
  methods: {
    focusToSearch() {},
    startSearch() {
      this.$refs.search.$el.focus();
      this.isSearching = true;
    },
    finishSearch() {
      this.search = "";
      this.isSearching = false;
    }
  },
  computed: {
    search: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(query) {
        this.$store.commit("SET_SEARCH_QUERY", query);
      }
    }
  },
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
  transition: $transition-fast;
}
.search-field::placeholder {
  color: $color-text-primary;
}
.search-bar-container.active {
  background-color: white;
}
.active .search-field {
  color: black;
}
.active .search-buttons,
.active .search-field::placeholder {
  color: $color-border;
}
.active .search-buttons:hover {
  background-color: $color-bg-light-transparent;
}
</style>
