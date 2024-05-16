
<template>
  <footer class="w-full flex justify-center items-center absolute bottom-0">
    <div
      class="w-full bg-black rounded-t-full h-[5rem] flex justify-center items-center"
    >
      <div
        class="imageContainer flex items-center justify-center w-full gap-20"
      >
        <img
          src="../assets/raizes-logo.png"
          alt="Raizes"
          width="47"
          height="60"
        />
        <img
          src="../assets/adv-logo.png"
          alt="Igreja Adventista"
          width="55"
          height="53"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "footer",
});
</script>
