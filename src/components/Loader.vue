
<template>
  <v-overlay :model-value="overlay" class="align-center justify-center">
    <v-progress-circular
      color="dark-blue"
      size="64"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "loader",
  computed: {
    overlay() {
      return this.$store.state.loading;
    },
  },
});
</script>
