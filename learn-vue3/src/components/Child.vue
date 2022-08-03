<template>
  <div class="card">
    <div class="card-header">Child Component</div>
    <div class="card-body">
      <DeepChild />
    </div>
  </div>
</template>

<script>
import DeepChild from "./DeepChild.vue";
export default {
  components: {
    DeepChild,
  },
  setup() {},
};
</script>

<style lang="scss" scoped></style>
