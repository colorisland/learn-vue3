<template>
  <div>
    <button @click="increment">Counter : {{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    let counter = ref(0);
    let increment = () => counter.value++;
    onMounted(() => {
      console.log("컴포넌트 마운트 되었습니다.");
    });
    return {
      counter,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
