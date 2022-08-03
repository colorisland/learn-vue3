<template>
  <div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body">
      {{ staticMessage }}
      {{ message }}
      {{ count }}
    </div>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";

export default {
  setup() {
    let staticMessage = inject("static-message");
    let message = inject("message");
    let count = inject("count");

    return { staticMessage, message, count };
  },
};
</script>

<style lang="scss" scoped></style>
