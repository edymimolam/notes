<template>
  <FontAwesomeIcon :icon="name" fixed-width />
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faTimes);

export default {
  components: { FontAwesomeIcon },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
