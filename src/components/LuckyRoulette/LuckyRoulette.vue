<template>
  <div class="w-full mt-28">
    <div class="w-full flex justify-center items-start gap-4">
      <v-btn size="large" variant="tonal" class="bg-black text-white">
        Sortear
      </v-btn>
      <div
        class="bg-white p-2 rounded cursor-pointer hover:opacity-60 border-[1px] border-black"
        @click="dialog = true"
      >
        <v-icon icon="fa-solid fa-gear"></v-icon>
      </div>
      <SettingsDialog
        :dialogProp="dialog"
        @closeDialog="closeDialog"
      ></SettingsDialog>
    </div>
    <div class="flex justify-center">
      <Roulette></Roulette>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SettingsDialog from "./SettingsDialog.vue";
import Roulette from "./Roulette.vue";

export default defineComponent({
  name: "lucky-roulette",
  components: { SettingsDialog, Roulette },

  setup() {
    return {
      dialog: ref(false),
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
});
</script>