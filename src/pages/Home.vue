
<template>
  <div class="h-screen flex justify-center w-full">
    <div class="w-3/4 relative">
      <Header></Header>
      <LuckyRoulette></LuckyRoulette>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LuckyRoulette from "../components/LuckyRoulette/LuckyRoulette.vue";

export default defineComponent({
  name: "home",
  components: { Header, Footer, LuckyRoulette },
});
</script>
