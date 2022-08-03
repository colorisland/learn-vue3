<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">Provide Inject Component</div>
      <div class="card-body">
        <Child />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Child from "./Child.vue";
import { provide } from "@vue/runtime-core";

export default {
  components: {
    Child,
  },
  setup() {
    let staticMessage = ref("static message");
    let message = ref("message");
    let count = ref(10);
    provide("static-message", staticMessage);
    provide("message", message);
    provide("count", count);

    return { staticMessage, message, count };
  },
};
</script>

<style lang="scss" scoped></style>
