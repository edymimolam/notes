<template>
  <li>{{ text }}</li>
</template>

<script>
export default {
  name: "Note",
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style></style>
