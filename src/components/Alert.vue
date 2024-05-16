
<template>
  <div class="w-full max-w-5xl m-auto mt-20 px-4">
    <v-alert
      v-model="communityNotFound"
      title="Community not found."
      text="Please, try to enter other community name."
      type="error"
      variant="tonal"
    ></v-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "alert",

  computed: {
    communityNotFound() {
      return this.$store.state.communityNotFound;
    },
  },
});
</script>
