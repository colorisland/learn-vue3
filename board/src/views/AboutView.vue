<template>
  <div class="container py-4 mx-0">
    <h3>회원</h3>
    <hr />
    <div>
      <vue-good-table :columns="columns" :rows="rows" />
    </div>
    <hr />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

let route = useRoute();
console.log("route.path: ", route.path);
</script>

<style lang="scss" scoped></style>
