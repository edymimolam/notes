<template>
  <input
    class="input"
    v-bind="$attrs"
    v-bind:value="value"
    v-on="inputListeners"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["value"],
  computed: {
    inputListeners: function() {
      var vm = this;
      // for v-model to work properly
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/design.scss";
.input {
  padding: $size-general-padding;
  width: 100%;
  border: none;
  background: transparent;
}
</style>
