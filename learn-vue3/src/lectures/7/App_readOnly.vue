<template>
  <div></div>
</template>

<script>
import { reactive, readonly } from "@vue/reactivity";
export default {
  setup() {
    let original = reactive({
      count: 0,
    });
    let copy = readonly(original);
    original.count++;
    copy.count++;
    console.log(original.count); //1
    console.log(copy.count); //1

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
