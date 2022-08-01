<template>
  <div>
    <button @click="increment">Click {{ state.count }}</button>
    <button @click="increment">Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    let state = reactive({
      count: 0,
      deep: {
        count: 0,
      },
    });
    let increment = () => {
      state.count++;
      state.deep.count++;
    };
    return {
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
