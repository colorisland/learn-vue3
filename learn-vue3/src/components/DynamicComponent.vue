<template>
  <div class="container py-4">
    <button
      class="btn btn-primary me-2"
      @click="changeCurrentComp(DynamicApple)"
    >
      사과
    </button>
    <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
      바나나
    </button>
    <hr />
    <component :is="currentComp"></component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DynamicApple from "./DynamicApple.vue";
import DynamicBanana from "./DynamicBanana.vue";

let currentComp = ref(DynamicApple);
let changeCurrentComp = (comp) => {
  currentComp.value = comp;
};
</script>

<style lang="scss" scoped></style>
