<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reversemessage }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  setup() {
    let message = ref("hello vue3");
    let reversemessage = ref("");
    watch(
      message,
      (newValue) => {
        reversemessage.value = newValue.split("").reverse().join("");
      },
      {
        immediate: true,
      }
    );
    return { message, reversemessage };
  },
};
</script>

<style lang="scss" scoped></style>
